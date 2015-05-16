// uses
var express = require('express')
  , cors = require('cors')
  , app = express()
  , db = require('./database.js');

console.log(db.test());

// libera acesso para o localhost
app.use(cors());

// webservice
app.get('/', function(req, res, next){
	console.log(req.query.string);
	var response = {
		string : req.query.string
	};
	res.send(response);
});

// iniciando o servidor
app.listen(9091, function(){
	console.log('webservice rodando na porta 9091');
});