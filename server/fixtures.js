
var data_hit = [					
					{type: 'steak', name: 'Стейк Баффало', add: 'нежное и постное мясо с овощами в пикантном соусе. Подается на горячей жаровне.', price:2400, info: '300гр', path: "img/menu/steaks/meat_small.png"},					
					{type: 'steak', name: 'Рибай говядина', add: 'стейк из подлопаточной части, толстый край, наиболее марморный, особенно сочный и ароматный.', price:2300, info: '300гр', path: "img/menu/steaks/rib-eye_small.png" },
					{type: 'steak', name: 'Рибай конина', add: 'конина - это деликатес, отличается специфическим вкусом и является любимым блюдом кочевых народов.', price:2400, info: '450гр', path: "img/menu/steaks/rib-eye2_small.jpg"},
					{ishit: true, type: 'steak', name: 'Тибон стейк', add: 'филейное мясо обладающее выраженным "говяжим вкусом" и самая нежная, изысканная часть вырезки.', price:2400, info: '450гр', path: "img/menu/steaks/t-bone_small.jpg"},
					{type: 'steak', name: 'Пеппер стейк', add: 'нежная середина вырезки в пеппере, то есть в свеже-молотом перце. Подается с сливочно-грибным соусом.', price:2890, info: '300гр', path: "img/menu/steaks/pepper_small.png"},
					{type: 'steak', name: "Men's стейк", add: 'наш фирменный стейк из центральной части вырезки. Самое нежное и постное мясо, для настоящих ценителей конины.', price:3200, info: '400гр', path: "img/menu/steaks/men_small.jpg"},
					{type: 'steak', name: 'Медальоны', add: 'вырезка говяжья, подается с фирменным соусом.', price:2600, info: '300гр', path: "img/menu/steaks/medal_small.jpg"},
					
					
					{ishit: true, type: 'pizza', name: 'Маргарита', smallPrice:990, bigPrice: 1390, path: "img/menu/pizzas/margarita_small.png"}, 
					{ishit: true, type: 'pizza', name: 'Пепперони', smallPrice:1190, bigPrice: 1390, path: "img/menu/pizzas/pepperoni_small.png"}, 
					{type: 'pizza', name: 'С фаршем', smallPrice:1290, bigPrice: 1890, path: "img/menu/pizzas/farsh_small.png"}, 
					{type: 'pizza', name: 'С грибами и курицей', smallPrice:1390, bigPrice: 1890, path: "img/menu/pizzas/chick_small.png"}, 
					{type: 'pizza', name: '4 сезона', smallPrice:1390, bigPrice: 1890, path: "img/menu/pizzas/seasons_small.png"}, 
					{type: 'pizza', name: "Men's pizza", smallPrice:1490, bigPrice: 1890, path: "img/menu/pizzas/men_small.png"}, 
					{type: 'pizza', name: 'Qazaq', smallPrice:1590, bigPrice: 1990, path: "img/menu/pizzas/qazaq_small.png"}, 
					{type: 'pizza', name: 'Мексикано', smallPrice:1590, bigPrice: 2190, path: "img/menu/pizzas/mexicano_small.png"}, 
					{type: 'pizza', name: 'Сладкая пицца', smallPrice:1290, bigPrice: 1590, path: "img/menu/pizzas/sweet_small.png"}, 


					{type: 'fastfood', name: 'Донер Кебаб', price:490, path: "img/menu/fastfood/doner_small.png"},
					{type: 'fastfood', name: 'Гирос', price:590, path: "img/menu/fastfood/gyros_small.png"},
					{ishit: true, type: 'fastfood', name: 'Каламаки', price:680, path: "img/menu/fastfood/kalamaki_small.png"},
					{type: 'fastfood', name: 'Хот-Дог', price:350, path: "img/menu/fastfood/hotdog_small.png"},
					{ishit: true, type: 'fastfood', name: 'Чизбургер', price:350, path: "img/menu/fastfood/cheeseburger_small.png"},
					{type: 'fastfood', name: 'Гамбургер', price:650, path: "img/menu/fastfood/hamburger_small.png"},
					{type: 'fastfood', name: 'Black бургер', price:750, path: "img/menu/fastfood/black_small.png"},
					{type: 'fastfood', name: "Men's бургер", price:850, path: "img/menu/fastfood/men_small.png"},
					{type: 'fastfood', name: 'Steak бургер', price:1450, path: "img/menu/fastfood/steak_small.png"},

					{type: 'dessert', name: "Men's чок ролл", price:600, path: "img/menu/desserts/no_small.png"},									
					{ishit: true, type: 'dessert', name: 'Вафельные рыбки', price:500, path: "img/menu/desserts/fish.png"},									
					

					{type: 'soups', name: 'Пельмени с соусом дзадзыки', price:590, path: "img/menu/soups/pelmen.png"},
					{type: 'soups', name: 'Латино', price:590, path: "img/menu/soups/__.png"},
					{type: 'soups', name: 'Рамен', price:850, path: "img/menu/soups/ramen_small.png"},
					

					{type: 'salads', name: 'Свежий', price:400, path: "img/menu/salads/svezh_small.png"},
					{type: 'salads', name: 'Греческий', price:850, path: "img/menu/salads/greek_small.png"},
					{type: 'salads', name: 'Цезарь', price:990, path: "img/menu/salads/cesar_small.png"},									

					{type: 'meat', name: 'Крылышки на гриле', price:700, path: "img/menu/meat/wing.png"},					
					{type: 'meat', name: 'Биточки из курицы', price:750, path: "img/menu/meat/bitocka_small.png"},					
					{type: 'meat', name: 'Баранина с овощами', price:1690, path: "img/menu/meat/baran_small.png"},					
					{type: 'meat', name: 'Баранина по-крестьянский', price:1680, path: "img/menu/meat/__.png"},					
                                        {type: 'combo', name: 'Комбо 1 | Выгодно', add: 'Каламаки /2 порции/ \n Фри /2 порции/ \n Coca-cola /2/', price:1650, path: "img/menu/combo/1.png"},
                                        {type: 'combo', name: 'Комбо 2', add: 'Пицца Пепперони \n Фри /2 порции/ \n Coca-cola /2/', price:1800, path: "img/menu/combo/2.png"},
                                        {type: 'combo', name: 'Комбо 3', add: 'Маргарита \n Пепперони \n Coca-cola /4/', price:2150, path: "img/menu/combo/3.png"},

    {type: 'bar', name: 'Чашка чая черный/зеленый', price: 70},
    {type: 'bar', name: 'Чай черный/зеленый', price: 250},
    {type: 'bar', name: 'Чай с молоком', price: 300},
    {type: 'bar', name: 'Ташкентский', price: 400},
    {type: 'bar', name: 'Энергетический', price: 490},
    {type: 'bar', name: 'Марокканский', price: 490},  
    
    {type: 'bar', name: 'Эспрессо', price: 200},
      {type: 'bar', name: 'Американо', price: 250},
      {type: 'bar', name: 'Латте', price: 350},
      {type: 'bar', name: 'Капучино', price: 300},			       
    {type: 'bar', name: 'Киви лайм', price: 1100},
      {type: 'bar', name: 'Клубничный', price: 1100},
      {type: 'bar', name: 'Тропик', price: 1100},
      {type: 'bar', name: 'Грейпфрут', price: 1100},

    {type: 'bar', name: 'Коктейль Молочный', price: 650},
      {type: 'bar', name: 'Коктейль Клубничный', price: 750},
      {type: 'bar', name: 'Орео', price: 790},
      {type: 'bar', name: 'Фраппе', price: 790},
      {type: 'bar', name: 'Мохито', price: 790},
      {type: 'bar', name: 'Айсберг', price: 790},
      {type: 'bar', name: 'Марди', price: 790},
      {type: 'bar', name: 'Зеленый шейк', price: 790},
      {type: 'bar', name: 'Содовая', price: 150},

      {type: 'sauce', name: 'Грибной', price: 350},
        {type: 'sauce', name: 'Дзадзыки', price: 250},
        {type: 'sauce', name: 'Сальса', price: 250},
        {type: 'sauce', name: 'Барбекю', price: 250},
        {type: 'sauce', name: 'Чили', price: 250},
        {type: 'sauce', name: 'Кетчуп', price: 80},
];

if (Menu.find().count() === 0) {
	for (var i = 0; i < data_hit.length; i++)
		Menu.insert(data_hit[i]);
}


