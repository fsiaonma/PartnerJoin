/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function() {    
    app.set('port', process.env.PORT || 3000);
    app.set('views', '../client/views');
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.methodOverride());
    
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({secret: "partnerJoin"}));

    app.use(app.router);
    app.use(express.static(path.join(__dirname, '../')));
});

if ('development' == app.get('env')) {
  	app.use(express.errorHandler());
}

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: "123456789"}));

app.get('/', routes.index);
app.get('/users', user.list);

app.post("/login", user.login);

http.createServer(app).listen(app.get('port'), function() {
  	console.log('Express server listening on port ' + app.get('port'));
});