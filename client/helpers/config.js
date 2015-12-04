Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  Router.go('/');
};

if (Meteor.isServer) {
  Meteor.users.allow({
    update: function () {
     return true; 
    }
  });
}
