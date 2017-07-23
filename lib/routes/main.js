Router.route('/contacts');
Router.route('/menu');
Router.route('/about');
Router.route('/feedback');
Router.route('/payment');
Router.route('/cart');
Router.route('/discounts')
Router.route('/', {
    template: 'home'
});
Router.configure({
	layoutTemplate: 'main',
	notFoundTemplate: 'notFound',	
});
