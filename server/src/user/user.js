var user = {
	list: function(req, res){
	  	res.send("respond with a resource");
	},

	login: function(req, res) {
		req.session.logined = true;
		res.send(req.body);
	}
}

module.exports = user;