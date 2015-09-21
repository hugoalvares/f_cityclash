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

	if (func == "getInvestments") {
		regrasInvestimento.buscaInvestimentos(function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "getManagerInvestments") {
		regrasGestorInvestimento.buscaInvestimentos(function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "createInvestment") {
		regrasGestorInvestimento.criaInvestimento(params.managerCode, params.investmentCode, params.lat, params.lng, function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "createOrganization") {
		regrasOrganizacao.criaOrganizacao(params.name, params.director, function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "getAllOrganizations") {
		regrasOrganizacao.buscaOrganizacoes(function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "getMyOrganizations") {
		regrasOrganizacao.buscaMinhasOrganizacoes(params.managerCode, function(result, data){
			response.send({result : result, data : data});
		});
	}

	if (func == "getMembers") {
		regrasOrganizacao.buscaMembros(function(result, data){
			response.send({result : result, data : data});
		});
	}	

	/*
	if (request.query.func == 'cadastraOrganizacao') {
		regrasOrganizacao.cadastraOrganizacao(request.dados.nome, function(){
			montaRetorno(null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});	
	} else if (request.query.funcao == 'buscaOrganizaçoes') {
		regrasOrganizacao.buscaOrganizacoes(function(dados){
			montaRetorno('buscaOrganizacoes', dados, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'creditaGestor') {
		regrasGestor.creditaGestor'(request.dados.codigo, request.dados.verba, request.dados.valor, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'debitaGestor') {
		regrasGestor.debitaGestor'(request.dados.codigo, request.dados.verba, request.dados.valor, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'entraOrganizacao') {
		regrasGestor.entraOrganizacao'(request.dados.codigo, request.dados.organizacao_codigo, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'compraInvestimento') {
		regrasGestorInvestimento.compraInvestimento'(request.dados.gestor_codigo, request.dados.investimento_codigo, request.dados.receita, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'vendeInvestimento') {
		regrasGestorInvestimento.vendeInvestimento'(request.dados.gestor_codigo, request.dados.investimento_codigo, request.dados.receita, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'cadastraReceita') {
		regrasTipoReceita.cadastraReceita'(request.dados.nome, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	} else if (request.query.funcao == 'cadastraInvestimento') {
		regrasInvestimento.cadastraInvestimento'(request.dados.nome, request.dados.preco, request.dados.tempoconstrucao, request.dados.manutencao, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	}  else if (request.query.funcao == 'cadastraReceita') {
		regrasInvestimento.cadastraReceita'(request.dados.tiporeceita_codigo, request.dados.estrutura_codigo, request.dados.valor, function(){
			montaRetorno(request.funcao, null, function(retorno){
				console.log(retorno);
				response.send(retorno);
			});
		});
	}
	*/
});

// porta em que vai iniciar o servidor
var porta = 9091;

// iniciando o servidor
app.listen(porta, function(){
	console.log('webservice rodando na porta ' + porta);
});