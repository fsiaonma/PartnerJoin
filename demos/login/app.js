/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var sl = require('../../server/libs/slib.eagleMysql.js');
var SqlCondition = sl.sqlCondition;
var eagleMysql = sl.eagleMysql;
eagleMysql.init(require('../../server/config/mysql/config.js').getParams());

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, './')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
	res.sendfile('./index.html');
});

// 响应登陆请求
app.post('/login', function(req, res) {
    // 设置条件
	var sqlCondtion = new SqlCondition();
    var selParams = {
        keys       : ['PASSWORD'], 
        table      : 'T_TEST_USER', 
        conditions : sqlCondtion.where("USERNAME = '" + req.body.username + "'").getSql()
    };
    // 搜索数据库
    eagleMysql.connet();
    eagleMysql.select(selParams, {
        success : function (data) {
            console.log('success');

            if (data.results.length > 0 && data.results[0].PASSWORD == req.body.password) {
                res.send({
                    success: true,
                    msg: "登陆成功"
                });
            } else {
                res.send({
                    success: false,
                    msg: "账号或密码错误"
                });
            }
        },
        error : function (err) {
            console.log(err)
        },
    });
    eagleMysql.disconnet();
});

// 响应注册请求
app.post("/regiest", function(req, res) {
    // 设置条件
    var sqlCondtion = new SqlCondition();
    var insertParams = {
        table  : 'T_TEST_USER',
        keys   : ['USERNAME', 'PASSWORD'],
        values : [req.body.username, req.body.password]
    };
    // 向数据库插入数据
    eagleMysql.connet();
    eagleMysql.insert(insertParams, {
        success : function (data) {
            res.send({
                success: true,
                msg: "注册成功"
            });
            console.log('success');
        },
        error : function (err) {
            console.log(err);
        }
    });
    eagleMysql.disconnet();
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
