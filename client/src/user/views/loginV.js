LoginView = Backbone.View.extend({
	template: null,

	el: $("#content"),

	events: {
        "click #signIn": "_doSignIn",
        "click #signUp": "_doSignUp" 
    },

    initialize: function(){
        this.renderSignIn();
    },

    renderSignIn: function() {
        this.template = _.template($("#login").html(), {});
        $(this.el).html(this.template);
    },

    renderSignUp: function() {
    	this.template = _.template($("#regiest").html(), {});
        $(this.el).html(this.template);
    },

    _doSignIn: function() {
    	$.post("/login", {Action: "post", Name: "lulu"}, function(t) {
    		console.log(t);	
    	});
    },

    _doSignUp: function() {
    	window.location.hash = "#signUp";
    }
});

var loginV = new LoginView();