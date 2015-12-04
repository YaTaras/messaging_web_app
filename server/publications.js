Meteor.publish('messages', function() {
	if(this.userId) {
 		var user = Meteor.users.findOne({_id: this.userId});
 		var userLocation = user.profile.location;
		return Messages.find({$or:[{"locationSet": userLocation}, {"author": user._id}]});
	}
});
