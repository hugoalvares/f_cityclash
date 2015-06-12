function UtilService(ScreenService){

	this.serverCall = function(func, params, callback){
		var data = {
			'func' : func,
			'params' : params
		};
		$.ajax({
			url : "http://localhost:9091",
			type : "POST",
			dataType : "json",
			data : JSON.stringify(data),
			contentType : "application/json",
			cache : false,
			timeout : 30000,
			success : function(response) {
				callback(response);
			},
			error : function() {
				ScreenService.showMessage('Erro de conexão, tente novamente.')
			}
		});
	};

};

Configuration(function(ContextRegister){
	ContextRegister.register('UtilService', UtilService);
});