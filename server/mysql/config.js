var dbOptions = {
    'host' : 'localhost',  
    'port' : 3306,  
    'user' : 'root',  
    'password' : '123456'
};

var dataBase = 'partnerjoin';

exports.getParams = function () {
    var params = {
        dbOptions : dbOptions,
        dataBase  : dataBase
    };
    return params;
};