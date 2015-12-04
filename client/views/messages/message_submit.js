Template.messageSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var message = {
      messageText: $(e.target).find('[name=messageText]').val(),
      title: $(e.target).find('[name=title]').val(),
      locationSet: Meteor.user().profile.location,
      author: Meteor.user()._id
    };


    message._id = Messages.insert(message);
    Router.go('messagePage', message);
  }
});