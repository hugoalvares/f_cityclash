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

var test = function () {
	return '111';
};

module.exports = {
    test: function () {
	    return test();
    }
};