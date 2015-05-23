// uses
var express = require('express')
  , cors = require('cors')
  , app = express()
  , db = require('./database.js')
  // regras
  , regrasGestor = require('./regras/gestor.js')
  , regrasGestorInvestimento = require('./regras/gestorInvestimento.js')
  , regrasInvestimento = require('./regras/investimento.js')
  , regrasOrganizacao = require('./regras/organizacao.js')
  , regrasTipoReceita = require('./regras/tipoReceita.js')
  , regrasTipoReceitaInvestimento = require('./regras/tipoReceitaInvestimento.js');

// libera acesso para o localhost
app.use(cors());

// webservice
app.get('/', function(req, res, next){
	console.log('webservice chamado');
	regrasOrganizacao.buscaOrganizacoes(function(dados){
		montaRetorno('buscaOrganizacoes', dados, function(retorno){
			console.log(retorno);
			res.send(retorno);
		});
	});
});

function montaRetorno(funcao, dados, callback) {
	var retorno = {
		funcao : funcao,
		data : dados
	};
	callback(retorno);
};

// porta em que vai iniciar o servidor
var porta = 80;

// iniciando o servidor
app.listen(porta, function(){
	console.log('webservice rodando na porta ' + porta);
});