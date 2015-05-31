// uses
var express = require('express')
  , bodyParser = require('body-parser')
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

// define que usa o formato application/json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// função chamada pelo Android (webservice)
app.post('/', function(request, response){
	console.log(request.body);
	response.send(request.body);
	/*
	if (request.query.funcao == 'cadastraOrganizacao') {
		regrasOrganizacao.cadastraOrganizacao(request.dados.nome, function(){
			montaRetorno(request.funcao, null, function(retorno){
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
	} else if (request.query.funcao == 'cadastraGestor') {
		regrasGestor.cadastraGestor(request.dados.nome, request.dados.email, request.dados.senha, function(){
			montaRetorno(request.funcao, null, function(retorno){
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