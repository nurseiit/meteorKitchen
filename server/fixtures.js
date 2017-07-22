var data_hit = [
					
					{type: 'steak', name: 'Стейк Баффало', add: 'нежное и постное мясо с овощами в пикантном соусе. Подается на горячей жаровне.', price:2400, info: '300гр', path: "img/menu/steaks/meat_small.png"},					
					{ishit: true, type: 'steak', name: 'Рибай говядина', add: 'стейк из подлопаточной части, толстый край, наиболее марморный, особенно сочный и ароматный.', price:2300, info: '300гр', path: "img/menu/steaks/rib-eye_small.png" },
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

					{type: 'fastfood', name: 'Blackburger', price:810, path: "img/menu/burger.png"},

					{type: 'soups', name: 'Суп', price:950, path: "img/menu/soup.png"},
					

					{type: 'salads', name: 'Салат', price:850, path: "img/menu/salat.png"},

					{type: 'bar', name: 'Кола', price:850, path: "img/menu/coke.png"},
				];

if (Menu.find().count() === 0) {
	for (var i = 0; i < data_hit.length; i++)
		Menu.insert(data_hit[i]);
}

