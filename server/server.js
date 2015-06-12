// uses
var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , app = express()
  , db = require('./database.js')
  // regras
  , regrasGestor = require('./classes/gestor.js')
  , regrasGestorInvestimento = require('./classes/gestorInvestimento.js')
  , regrasInvestimento = require('./classes/investimento.js')
  , regrasOrganizacao = require('./classes/organizacao.js')
  , regrasTipoReceita = require('./classes/tipoReceita.js')
  , regrasTipoReceitaInvestimento = require('./classes/tipoReceitaInvestimento.js');

// libera acesso para o localhost
app.use(cors());

// define que usa o formato application/json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// função chamada pelo Android (webservice)
app.post('/', function(request, response){
	console.log('entrada:');
	console.log(request.body);

	var func = request.body.func;
	var params = request.body.params;

	if (func == "login") {
		regrasGestor.login(params.email, params.password, function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "register") {
		regrasGestor.cadastro(params.nickname, params.email, params.password, function(result, data){
			response.send({result : result, data : data});
		});
	}
	//response.send(request.body);
	/*
	if (request.query.func == 'cadastraOrganizacao') {
		regrasOrganizacao.cadastraOrganizacao(request.dados.nome, function(){
			montaRetorno(null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.func == 'cadastraGestor') {
		regrasOrganizacao.cadastraGestor(request.dados.nome, request.dados.email, request.dados.senha, function(){
			montaRetorno(null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.func == 'cadastraGestor') {
		regrasOrganizacao.buscaOrganizacoes(function(dados){
			montaRetorno(dados, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	}
	*/
});

function montaRetorno(func, data, callback) {
	var retorno = {
		func : func,
		data : data
	};
	callback(retorno);
};

// porta em que vai iniciar o servidor
var porta = 9091;

// iniciando o servidor
app.listen(porta, function(){
	console.log('webservice rodando na porta ' + porta);
});