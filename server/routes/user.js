exports.list = function(req, res){
  	res.send("respond with a resource");
};

exports.login = function(req, res) {
	console.log(req.session);
	console.log(req.params, req.query, req.body);
	req.session.logined = true;
	res.send(req.body);
}