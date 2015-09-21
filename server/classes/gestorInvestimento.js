var db = require('../database.js');

module.exports = {
	buscaInvestimentos : function(callback) {
		var sql = 'select gi.codigo, gi.lat, gi.lng, iv.nome, ge.apelido, gi.gestor_codigo, gi.investimento_codigo, iv.rendimento from gestorinvestimento gi, investimento iv, gestor ge where gi.gestor_codigo = ge.codigo and gi.investimento_codigo = iv.codigo';
		db.rodaSql(sql, function(dados){
			callback(true, dados);
		});
	},
	
	criaInvestimento : function(gestor_codigo, investimento_codigo, lat, lng, callback) {
		var sql = 'insert into gestorinvestimento (gestor_codigo, investimento_codigo, lat, lng) values ('+gestor_codigo+', '+investimento_codigo+', '+lat+', '+lng+')';
		db.rodaSql(sql, function(dados){
			callback(true, dados);
		});
	}
};