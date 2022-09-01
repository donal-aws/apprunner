var mysql = require('mysql');

var rdsUrl = 'hotel-app-database-instance-1.cwb9axnavdzs.eu-west-1.rds.amazonaws.com';
var password =  'Password';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;


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
