var express = require('express');
var sl = require('../../common/lib/slib.pro.js');
var SqlCondition = sl.sqlCondition;
var eagleMysql = sl.eagleMysql;
eagleMysql.init(require('../../server/mysql/config.js').getParams());

//test insert
var testInsert = function () {
    var sqlCondtion = new SqlCondition();
    var insertParams = {
        table  : 'T_TEST_USER',
        keys   : ['USERNAME'],
        values : ['testName']
    };
    eagleMysql.insert(insertParams, {
        success : function (data) {
            console.log('success');
        },
        error : function (err) {
            console.log(err);
        }
    });
};

//test delete
var testDelete = function () {
    var sqlCondtion = new SqlCondition();
    var delParams = {
        table      : 'T_TEST_USER', 
        conditions : sqlCondtion.where("USERNAME = 'testName'").getSql()
    };
    eagleMysql.delete(delParams, {
        success : function (data) {
            console.log('success');
        },
        error : function (err) {
            console.log(err)
        },
    });
};

//test update
var testUpdate = function () {
    var sqlCondtion = new SqlCondition();
    var updateParams = {
        table  : 'T_TEST_USER',
        keys   : ['USERNAME'],
        values : ['updateName'],
        conditions : sqlCondtion.where("USERNAME = 'testName'").getSql()
    };
    eagleMysql.update(updateParams, {
        success : function (data) {
            console.log('success');
        },
        error : function (err) {
            console.log(err);
        }
    });
};

// test select
var testSelect = function () {
    var sqlCondtion = new SqlCondition();
    var selParams = {
        keys       : ['USERNAME'],
        table      : 'T_TEST_USER',
        conditions : sqlCondtion.where("USERNAME = 'updateName'").and('1=1').getSql()
    };
    eagleMysql.select(selParams, {
        success : function (data) {
            console.log('success');
        },
        error : function (err) {
            console.log(err)
        },
    });
};

//switch your test function
(function () {
    //connet
    eagleMysql.connet();
    //insert
    testInsert();
    // //delete
    testInsert();
    testDelete();
    // //update
    testInsert();
    testUpdate();
    // //select
    testSelect();
    //disconnet
    eagleMysql.disconnet();
})();