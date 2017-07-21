var data_hit = [
					
					{type: 'steak', name: 'Стейк Баффало', add: 'нежное и постное мясо с овощами в пикантном соусе. Подается на горячей жаровне.', price:2400, info: '300гр', path: "img/menu/steaks/meat_small.png"},					
					{type: 'steak', name: 'Рибай говядина', add: 'стейк из подлопаточной части, толстый край, наиболее марморный, особенно сочный и ароматный.', price:2300, info: '300гр', path: "img/menu/steaks/rib-eye_small.png" },
					{type: 'steak', name: 'Рибай конина', add: 'конина - это деликатес, отличается специфическим вкусом и является любимым блюдом кочевых народов.', price:2400, info: '450гр', path: "img/menu/steaks/rib-eye2_small.jpg"},
					{type: 'steak', name: 'Тибон стейк', add: 'филейное мясо обладающее выраженным "говяжим вкусом" и самая нежная, изысканная часть вырезки.', price:2400, info: '450гр', path: "img/menu/steaks/t-bone_small.jpg"},
					{type: 'steak', name: 'Пеппер стейк', add: 'нежная середина вырезки в пеппере, то есть в свеже-молотом перце. Подается с сливочно-грибным соусом.', price:2890, info: '300гр', path: "img/menu/steaks/pepper_small.png"},
					{type: 'steak', name: "Men's стейк", add: 'наш фирменный стейк из центральной части вырезки. Самое нежное и постное мясо, для настоящих ценителей конины.', price:3200, info: '400гр', path: "img/menu/steaks/men_small.jpg"},
					{type: 'steak', name: 'Медальоны', add: 'вырезка говяжья, подается с фирменным соусом.', price:2600, info: '300гр', path: "img/menu/steaks/medal_small.jpg"},
					
					{type: 'pizza', name: 'Pizza', smallPrice:850, bigPrice: 1000, path: "img/menu/pizza.png"},

					{type: 'fastfood', name: 'Blackburger', price:810, path: "img/menu/burger.png"},

					{type: 'soups', name: 'Суп', price:950, path: "img/menu/soup.png"},

					// {type: 'order', name: 'Заказ', price:850, path: "img/menu/burger.png"},


					{type: 'salads', name: 'Салат', price:850, path: "img/menu/salat.png"},

					{type: 'bar', name: 'Кола', price:850, path: "img/menu/coke.png"},
				];

if (Menu.find().count() === 0) {
	for (var i = 0; i < data_hit.length; i++)
		Menu.insert(data_hit[i]);
}

