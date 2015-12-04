// file where i put my js code :)

Template.messagesList.helpers({
  messages: function() {
  	if(!!Meteor.user())
   		return Messages.find();
  }
});
