/**
 * Module dependencies.
 */
var express = require('express')
  , fs = require("fs")
  , routes = require('./src/routes')
  , user = require('./src/user/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function() {    
    app.set('port', process.env.PORT || 3000);
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.methodOverride());
    
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({secret: "partnerJoin"}));

    app.use(app.router);
    app.use(express.static(path.join(__dirname, '../client/')));
});

if ('development' == app.get('env')) {
  	app.use(express.errorHandler());
}

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: "123456789"}));

app.get('/', function(req, res) {
    fs.readFile('../client/index.html',function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
        res.write(data);
        res.end();
    });
});
app.get('/users', user.list);

app.post("/login", user.login);

http.createServer(app).listen(app.get('port'), function() {
  	console.log('Express server listening on port ' + app.get('port'));
});
