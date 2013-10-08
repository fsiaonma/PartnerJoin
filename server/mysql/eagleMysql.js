//mysql 适配器
var mysql  = require('mysql');
var requirejs = require('requirejs');
var mysqlSetting = require('../../common/config/mysqlSetting');
var client = null;

exports.createTables = function (tables) {
    for (var i = 0, tablesLen = tables.length; i < tablesLen; ++i) {
        var tableName = tables[i].Name;
        var fields = tables[i].Fields;
        var queryStr = 'CREATE TABLE if not exists ' + tableName + 
                     '(ID INT(11) not null AUTO_INCREMENT, ';
        for (var t = 0, fieldsLen = fields.length; t < fieldsLen; ++t) {
            queryStr += fields[t].key + ' ' + fields[t].type + ', ';
        }
        queryStr += 'PRIMARY KEY (id))';
        client.query(queryStr);
    };
};
    
exports.insert = function (params, callback) {
    var keyStr = ' ' + params.keys[0] + '=? ';
    for (var i = 1, keysLen = params.keys.length; i < keysLen; ++i) {
        keyStr += ', ' + params.keys[i] + '=? ';
    }
    client.query('INSERT INTO ' + params.table + ' SET ' + keyStr, params.values, 
        function (err, results, fields) {
            doCallback(err, results, fields, callback);
        }
    );
};

exports.delete = function (params, callback) {
    client.query('DELETE FROM ' + params.table  + ' ' + params.conditions,
        function (err, results, fields) {
            doCallback(err, results, fields, callback);
        }
    );
};  

exports.update = function (params, callback) {
    var keyStr = ' ' + params.keys[0] + '=? ';
    for (var i = 1, keysLen = params.keys.length; i < keysLen; ++i) {
        keyStr += ', ' + params.keys[i] + '=? ';
    }
    client.query('UPDATE ' + params.table + ' SET ' + keyStr + ' ' + params.conditions, params.values,
        function (err, results, fields) {
            doCallback(err, results, fields, callback);
        }
    );
};

exports.select = function (params, callback) {
    var keyStr = ' ' + params.keys[0] + ' ';
    for (var i = 1, keysLen = params.keys.length; i < keysLen; ++i) {
        keyStr += ', ' + params.keys[i] + ' ';
    }
    client.query('SELECT ' + keyStr + ' FROM ' + params.table  + ' ' + params.conditions,
        function (err, results, fields) {
            doCallback(err, results, fields, callback);
        }
    );
};

exports.connet = function () {
    var setting = mysqlSetting.getParams();
    client = mysql.createConnection(setting.dbOptions);
    client.query('USE ' + setting.dataBase, function(error, results) {
        if(error) {
            console.log('ClientConnectionReady Error: ' + error.message);
            disconnet();
            return;
        }else{
            console.log('ClientConnect Success');
        }
    });
};

exports.disconnet = function () {
    client.end();
    client = null;
};

var doCallback = function (err, results, fields, callback) {
    if (err) {
        callback.error(err);
    } else {
        data = {
            results : results,
            fields  : fields
        }
        callback.success(data);
    }
};
