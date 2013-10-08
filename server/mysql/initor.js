var eagleMysql = require('./eagleMysql.js');

var T_PROJECT = {
    Name   : 'T_PROJECT',
    Fields : [{
        key  : 'NAME',
        type : 'VARCHAR(255)',
    }, {
        key  : 'BELONG_ID',
        type : 'INT(11)',
    }, {
        key  : 'TYPE',
        type : 'ENUM("PROJECT", "VERSION")',
    }, {
        key  : 'CREATE_TIME',
        type : 'TIMESTAMP',
    }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_MENU = {
  Name   : 'T_MENU',
  Fields : [{
      key  : 'ITEM_NAME',
      type : 'VARCHAR(255)'
  }, {
      key  : 'STATUS',
      type : 'ENUM("NORMAL", "REMOVE")',
  }]
};

var T_TOOLS = {
  Name   : 'T_TOOLS',
  Fields : [{
      key  : 'TOOL_NAME',
      type : 'VARCHAR(255)'
  }, {
      key  : 'STATUS',
      type : 'ENUM("NORMAL", "REMOVE")',
  }]
};

var T_TESTS = {
    Name : 'T_TESTS',
    Fields : [{
        key  : 'TEST_NAME',
        type : 'VARCHAR(255)',
    }, {
        key  : 'PROJECT_ID',
        type : 'INT(11)',
    }, {
        key  : 'VERSION_ID',
        type : 'INT(11)',
    }, {
        key  : 'TOOL_ID',
        type : 'INT(11)',
    }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_TEST_RESULT = {
    Name   : 'T_TEST_RESULT',
    Fields : [{
        key  : 'TEST_ID',
        type : 'INT(11)',
    }, {
        key  : 'PROPERTY',
        type : 'VARCHAR(255)',
    }, {
        key  : 'VALUE',
        type : 'VARCHAR(255)',
    }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_FILE = {
    Name   : 'T_FILE',
    Fields : [{
        key  : 'FILE_NAME',
        type : 'VARCHAR(255)',
    }, {
        key  : 'FILE_PATH',
        type : 'VARCHAR(255)',
    }, {
        key  : 'PREFIX_NAME',
        type : 'VARCHAR(255)',
    }, {
        key  : 'SUFFIX_NAME',
        type : 'VARCHAR(255)',
    }, {
        key  : 'BELONG_ID',
        type : 'INT(11)',
    }, {
        key  : 'TYPE',
        type : 'ENUM("PROJECT", "TEST")',
    }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_USER = {
    Name   : 'T_USER',
    Fields : [{
        key  : 'USER_ACCOUNT',
        type : 'VARCHAR(255)',
      }, {
        key  : 'PASSWORD',
        type : 'INT(11)',
      }, {
        key  : 'USER_NICKNAME',
        type : 'VARCHAR(255)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var TR_USER_ROLE = {
    Name   : 'TR_USER_ROLE',
    Fields : [{
        key  : 'USER_ID',
        type : 'INT(11)',
      }, {
        key  : 'ROLE_ID',
        type : 'INT(11)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_ROLE = {
    Name   : 'T_ROLE',
    Fields : [{
        key  : 'ROLE_NAME',
        type : 'VARCHAR(255)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var TR_ROLE_PRIVILEGE = {
    Name   : 'TR_ROLE_PRIVILEGE',
    Fields : [{
        key  : 'ROLE_ID',
        type : 'INT(11)',
      }, {
        key  : 'PRIVILEGE_ID',
        type : 'INT(11)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_PRIVILEGE = {
    Name   : 'T_PRIVILEGE',
    Fields : [{
        key  : 'PRIVILEGE_NAME',
        type : 'VARCHAR(255)',
      }, {
        key  : 'TOOL_ID',
        type : 'INT(11)',
      }, {
        key  : 'PROJECT_ID',
        type : 'INT(11)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var T_MODEL = {
    Name   : 'T_MODEL',
    Fields : [{
        key  : 'MODEL_NAME',
        type : 'VARCHAR(255)',
      }, {
        key  : 'BELONG_ID',
        type : 'INT(11)',
      }, {
        key  : 'PROJECT_ID',
        type : 'INT(11)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var TR_MODEL_VERSION = {
    Name   : 'TR_MODEL_VERSION',
    Fields : [{
        key  : 'VERSION_ID',
        type : 'INT(11)',
      }, {
        key  : 'MODEL_ID',
        type : 'INT(11)',
      }, {
        key  : 'STATUS',
        type : 'ENUM("NORMAL", "REMOVE")',
    }]
};

var dataBase = 'zeus';
var tables = [
    T_PROJECT, 
    T_MENU, 
    T_TOOLS, 
    T_TESTS, 
    T_TEST_RESULT, 
    T_FILE,
    T_USER, 
    TR_USER_ROLE,            
    T_ROLE, 
    TR_ROLE_PRIVILEGE, 
    T_PRIVILEGE,
    T_MODEL,
    TR_MODEL_VERSION
];

eagleMysql.connet();
eagleMysql.createTables(tables);
eagleMysql.disconnet();
