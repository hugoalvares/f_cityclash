var db = require('../database.js');

module.exports = {
	cadastraInvestimento : function(nome, preco, tempoconstrucao, manutencao) {
		db.rodaSql('insert into gestor (nome, preco, tempoconstrucao, manutencao) values ('+ nome +','+ preco +','+ tempoconstrucao +','+ manutencao +')', function(){
			callback();
		});
	},
	cadastraReceita : function(tiporeceita_codigo, estrutura_codigo, valor) {
		db.rodaSql('insert into gestor (tiporeceita_codigo, estrutura_codigo, valor) values ('+tiporeceita_codigo+','+estrutura_codigo+','+ valor +')', function(){
			callback();
		});
	},