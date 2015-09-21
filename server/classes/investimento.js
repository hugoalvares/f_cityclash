var db = require('../database.js');

module.exports = {
	buscaInvestimentos : function(callback) {
		var sql = 'select * from investimento';
		db.rodaSql(sql, function(dados){
			if (dados.length > 0) {
				callback(true, dados);
			} else {
				callback(false, 'Não há investimentos cadastrados.');
			}
		});
	}
};