
/*
 * GET home page.
 */

exports.index = function(req, res){
  	res.sendfile('../client/index.html');
};