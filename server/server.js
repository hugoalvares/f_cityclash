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
	buscaOrganizacoes(function(organizacoes){
		montaRetorno(organizacoes, function(retorno){
			res.send(retorno);
		});
	});
});

function montaRetorno(dados, callback) {
	var retorno = {
		data : dados
	};
	console.log('retorno:');
	console.log(retorno);
	callback(retorno);
};

function buscaOrganizacoes(callback) {
	db.rodaSql('select * from organizacao', function(organizacoes){
		callback(organizacoes);
	});
};

// porta em que vai iniciar o servidor
var porta = 80;

// iniciando o servidor
app.listen(porta, function(){
	console.log('webservice rodando na porta ' + porta);
});