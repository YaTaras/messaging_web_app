Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
  	return Meteor.subscribe('messages'); 
  }
});

Router.route('/', {name: 'messagesList'});

Router.route('/messages/:_id', {
	name: 'messagePage',
	data: function() {
		return Messages.findOne(this.params._id);
	}
});

Router.route('/submit', {name: 'messageSubmit'});

Router.route('/userprofile', {name: 'userUpdate'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'messagePage'});
Router.onBeforeAction(requireLogin, {only: 'messageSubmit'});