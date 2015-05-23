var db = require('../database.js');

module.exports = {
	cadastraGestor : function(nome, email, senha, callback) {
		db.rodaSql('insert into gestor (nome, email, senha) values ('+ nome +','+ email +', '+ senha +')', function(){
			callback();
		});
	},
	creditaGestor : function(codigo, valor, callback) {
		db.rodaSql('update gestor set valor = valor + '+ valor +' where codigo = '+ codigo, function(){
			callback();
		});
	}
};