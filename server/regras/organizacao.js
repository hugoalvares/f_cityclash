var db = require('../database.js');

module.exports = {
	buscaOrganizacoes : function(callback) {
		db.rodaSql('select * from organizacao', function(organizacoes){
			callback(organizacoes);
		});
	},
	criaOrganizacao : function(callback) {
		db.rodaSql('insert into organizacao (nome) values ('+ nome +')', function(organizacoes){
			callback(organizacoes);
		});
	}
};