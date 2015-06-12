var db = require('../database.js');

module.exports = {
	buscaOrganizacoes : function(nome, callback) {
		db.rodaSql('select * from organizacao where nome =' + nome, function(organizacoes){
			callback(organizacoes);
		});
	},
	cadastraOrganizacao : function(nome, diretor, callback) {
		db.rodaSql('insert into organizacao (nome, diretor) values ('+ nome +','+ diretor +')', function(){
			callback();
		});
	}
};