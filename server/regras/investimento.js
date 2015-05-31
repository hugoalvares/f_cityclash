var db = require('../database.js');

module.exports = {
	cadastraInvestimento : function(nome) {
		db.rodaSql('insert into gestor (nome, email, senha) values ('+ nome +')', function(){
			callback();
		});
	},