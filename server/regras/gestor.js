var db = require('../database.js');

module.exports = {
	cadastraGestor : function(nome, email, senha, callback) {
		db.rodaSql('insert into gestor (nome, email, senha) values ('+ nome +','+ email +', '+ senha +')', function(){
			callback();
		});
	}, 
	creditaGestor : function(codigo, verba, valor callback) {
		db.rodaSql('update gestor set verba = verba + '+ valor +' where codigo = '+ codigo, function(){
			callback();
		});
	}
	debitaGestor : function(codigo, verba, valor callback) {
		db.rodaSql('update gestor set verba = verba - '+ valor +' where codigo = '+ codigo, function(){
			callback();
		});
	}
	entraOrganizacao : function(codigo, organizacao_codigo, callback) {
		db.rodaSql('update gestor set organizacao_codigo = '+ organizacao_codigo +' where codigo = '+ codigo, function(){
			callback();
		});
	}
	compraInvestimento : function(gestor_codigo, investimento_codigo, receita, callback) {
		db.rodaSql('insert into gestorinvestimento (gestor_codigo, investimento_codigo, receita) values ('+ gestor_codigo +','+ investimento_codigo +', '+ receita +')', function(){
			callback();
		});
	}
	vendeInvestimento : function(gestor_codigo, investimento_codigo, receita, callback) {
		db.rodaSql('update gestorinvestimento set gestor_codigo = '+ gestor_codigo +' where gestor_codigo = '+ gestor_codigo, function(){
			callback();
		});
	}
};