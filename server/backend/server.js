// uses
var express = require('express')
  , cors = require('cors')
  , app = express()
  , db = require('./database.js');

// libera acesso para o localhost
app.use(cors());

// webservice
app.get('/', function(req, res, next){
	console.log('webservice chamado');
	var response = {
		string : req.query.string
	};
	res.send(response);
});

function buscaOrganizacoes(nome) {
	db.rodaSql('select * from organizacao', function(organizacoes){
		console.log(organizacoes);		
	});
};

// porta em que vai iniciar o servidor
var porta = 80;

// iniciando o servidor
app.listen(porta, function(){
	console.log('webservice rodando na porta ' + porta);
});