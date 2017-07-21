Router.route('/contacts');
Router.route('/menu');
Router.route('/cart');
Router.route('/', {
    template: 'home'
});
Router.configure({
	layoutTemplate: 'main',
	notFoundTemplate: 'notFound',	
});
