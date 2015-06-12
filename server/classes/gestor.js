var db = require('../database.js');

module.exports = {
	login : function(email, password, callback) {
		var sql = 'select * from gestor where email = "'+ email +'" and senha = "'+ password +'"';
		db.rodaSql(sql, function(dados){
			if (dados.length > 0) {
				callback(true, dados);
			} else {
				callback(false, 'Email ou senha inválidos.');
			}
		});
	},

	cadastro : function(nickname, email, password, callback) {
		// valida se o email já está em uso
		var sql = 'select * from gestor where email = "'+ email +'"';
		db.rodaSql(sql, function(dados){
			if (dados.length > 0) {
				// email em uso
				callback(false, 'Email já está em uso.');
			} else {
				// email disponível
				var sql = 'insert into gestor (email, apelido, senha) values ("'+ email +'","'+ nickname +'", "'+ password +'")';
				db.rodaSql(sql, function(dados){
					callback(true, dados);
				});				
			}
		});
	},

	creditaGestor : function(codigo, valor, callback) {
		db.rodaSql('update gestor set valor = valor + '+ valor +' where codigo = '+ codigo, function(){
			callback();
		});
	}
};