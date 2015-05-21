// uses
var mysql = require('mysql');

// database connection string 
var connection = mysql.createConnection(
    {
    	host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'cityclash',
    }
);  

var rodaSql = function(sql, callback) {
	connection.query(sql, function(err, rows, fields) {
	    if (err) throw err;
	 	callback(rows);
	});
}

module.exports = {
    rodaSql: function (sql, callback) {
	    return rodaSql(sql, callback);
    }
};