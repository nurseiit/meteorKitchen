Template.topCart.onCreated (function () {
	Session.set('nonempty', 0);
	Session.set('count', 0);
});
Template.topCart.helpers({
	nonempty: function () {
		return Session.get('nonempty');
	},
	count: function () {
		return Session.get('count');
	},
});

cart = (function() {
	var data = [];
	var empty = function () {
		return data.length === 0;
	};
	var count = function () {
		return data.length;
	};
	var render = function (foo) {
		Session.set('nonempty', count() !== 0);
		Session.set('count', count());
	};
	var add = function (foo) {
		data.push(foo);
		render();
	};
	var remove = function (id) {
		var j = -1;
		for (var i = 0; i < data.length; i++)
			if (data[i]._id === id) {
				j = i; break;
			}
		if (j !== -1) {
			data.splice(j, 1);
		}
		render();
	}
	return {
		count: count,
		add: add,
		data: data,
		remove: remove,
	}
}());

Template.cart.helpers ({
	// data: cart.data,
	data: cart.data,
	total: function () {		
		return Session.get('total');
	}
});
Template.cart.onCreated (function () {	
	Session.set('total', 0);	
});

var CNT = {};
var used = {};

Template.cart.events ({
	'click i.before-submit':function (event, template) {
		var $another = $('#ordata');
		result = "Заказ: \n";
		var it = Template.cart.__helpers.get('data'), former = it;
		var latter = [];
		for (var i = 0; i < former.length; i++)
			if (used[former[i]._id] === 1) {
				former[i].cnt = CNT[former[i]._id];
				latter.push (former[i])
			}
		var sum = 0, which = 0;
		for (var i = 0; i < latter.length; i++) {
			if (!latter[i].cnt) continue;
			result += (++which) + ") " + latter[i].cnt + " of " + latter[i].name + " - " + latter[i].price + " ==> " + (latter[i].price * (latter[i].cnt ? latter[i].cnt : 1));
			if (latter[i].info)
				result += " <+Доп. инфо.+> " + latter[i].info;
			result += "\n<---------->\n";
			sum += (latter[i].price * (latter[i].cnt ? latter[i].cnt : 1));
		}
		result += "----------  Всего: " + sum + " тенге. --"; 		
		$another.val(result);		
		$('#send-mail').trigger('click');		
	},
});

Template.cartItem.helpers ({	
	cnt: function () {
		return Template.instance().cnt.get();
	},
	cost: function () {
		return Template.instance().cnt.get() * this.price;
	},
	isoff: function () {
		return Session.get (this._id + '_isoff');
	},
})

Template.cartItem.onCreated (function () {
	this.cnt = new ReactiveVar (1);	
	var cur = Template.currentData(), foobar = cur.price;
	if (Session.get (cur._id + '_isoff') !== 1) {
		Session.set('total', Session.get('total') + foobar);
		CNT[cur._id] = 1;
	}
});
///////////////////////
Template.cartItem.events ({
	'click button.increase':function (event, template) {
		var old = template.cnt.get();
		template.cnt.set (old + 1);
		CNT[template.data._id]++;
		Session.set('total', Session.get('total') + template.data.price);
	},
	'click button.decrease':function (event, template) {
		var old = template.cnt.get();
		if (old > 1) {
			template.cnt.set (old - 1);
			Session.set('total', Session.get('total') - template.data.price);
			CNT[template.data._id]--;
		}
	},
	'click button.remove':function (event, template) {
		var id = template.data._id;
		Session.set('total', Session.get('total') - template.data.price * template.cnt.get());
		$('#' + id).fadeOut(1000);
		Session.set(id + '_isoff', 1);
		used[id] = 0;
		cart.remove (id);
		CNT[template.data._id] = 0;
		Bert.alert( 'Удалено из корзины', 'danger', 'growl-top-right');
	}
});

Template.hitMenu.helpers ({	
	data: Menu.find({ishit: true}),	
});

var names = [
	'steak',
	'pizza',
	'fastfood',
	'soups',	
	'salads',
	'bar',
	'dessert',
	'meat',
	'combo',
];

Template.menu.helpers ({
	data: function () {
		var foo = Session.get('curId');
		return Menu.find({type: names[foo ? foo : 0]});
	},
	isSteak: function () {
		return !Session.get ('curId');
	}, 
	sauce: Menu.find({type: 'sauce'}),

});

Template.menuItem.onCreated (function () {
	this.added = new ReactiveVar(0);	
});

var current = 0;

Template.menuItem.helpers ({
	added: function () {		
			if (used[this._id] === 1) {
				Session.set ('useless', ++current);
				return Session.get('useless') - current + 1;
			}
		Session.set ('useless', ++current);
		return Session.get('useless') - current;
	},
	ispizza: function () {
		return this.type === 'pizza';
	},
        iscombo: function () {
                return this.type === 'combo';
        },
});
Template.menuItem.events ({
	'click button.cart-add':function (event, template) {
		if (this.type === 'pizza' && !this.info) {
			Bert.alert( 'Выберите размер пиццы', 'warning', 'growl-top-right');
			return 0;
		}		
		cart.add(this);
		used[this._id] = 1;
		Bert.alert( 'Добавлено в корзину', 'info', 'growl-top-right');
	},
	'click .big input':function (event, template) {
		$('#' + this._id + "small").prop('checked', false);		
		this.price = this.bigPrice;
		this.info = "37 см";
	},
	'click .small input':function (event, template) {
		$('#' + this._id + "big").prop('checked', false);		
		this.price = this.smallPrice;
		this.info = "30 см";
	},
});

Template.Header.events ({
	'click #top-panel i':function (event, template) {
		if ($(document).scrollTop() < 300) {		
			$('html,body').animate({scrollTop: 440}, 800);
		}
		var $foo = $('#top-panel').find(event.target);
		var $val = $($foo).closest('li');
		var i = $('#top-panel').find('li').index($val);
		Session.set('curId', i);					
		Router.go('/menu');			
	},
	'click i.opencart':function (event, template) {
		event.preventDefault();
		Router.go('/cart');		
	},	
});



