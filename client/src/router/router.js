var Routers = Backbone.Router.extend({
    routes: {
    	"": "toSignIn",
        "signUp": "toSignUp"
    },

    toSignIn: function() {
    	loginV.renderSignIn();
    },

    toSignUp: function() {
    	loginV.renderSignUp();
    }
});

var router = new Routers();
Backbone.history.start();