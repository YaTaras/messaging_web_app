Template.userUpdate.events({
  'submit form': function(e) {
    e.preventDefault();
	
	// get new data from client
    var user = {
      name: $(e.target).find('[name=author]').val(),
      email: $(e.target).find('[name=email]').val(),
      location: $(e.target).find('[name=location]').val()
    };

 	// update user profile
    Meteor.users.update({_id:Meteor.user()._id}, {$set:	{"profile.name": user.name, 
												    	"profile.email": user.email, 
												    	"profile.location": user.location
												    	}});

    Router.go('/');
  }
});