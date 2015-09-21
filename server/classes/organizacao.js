var db = require('../database.js');

module.exports = {
	buscaOrganizacoes : function(callback) {
		db.rodaSql('select * from organizacao', function(data){
			callback(true, data);
		});
	},

	buscaMinhasOrganizacoes : function(codigo, callback) {
		var sql = 'select go.*, og.nome from gestororganizacao go, organizacao og where gestor_codigo = '+ codigo +' and og.codigo = go.organizacao_codigo';
		db.rodaSql(sql, function(data){
			callback(true, data);
		});
	},

	buscaMembros : function(callback) {
		var sql = '';
		db.rodaSql(sql, function(data){
			callback(true, data);
		});
	},	
	
	criaOrganizacao : function(nome, diretor, callback) {
		db.rodaSql('insert into organizacao (nome, diretor) values ("'+ nome +'", '+ diretor +')', function(){
			db.rodaSql('select max(codigo) as codigo from organizacao', function(ultimaOrganizacao){
				console.log(ultimaOrganizacao);
				db.rodaSql('insert into gestororganizacao (gestor_codigo, organizacao_codigo) values ("'+ diretor +'", '+ ultimaOrganizacao[0]['codigo'] +')', function(){
					callback(true);
				});
			});
		});
	}
};