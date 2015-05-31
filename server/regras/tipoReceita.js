var db = require('../database.js');

module.exports = {
	cadastraReceita : function(nome) {
		db.rodaSql('insert into tiporeceita (nome) values ('+ nome +')', function(){
			callback();
		});
	},