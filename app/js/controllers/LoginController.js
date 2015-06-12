function LoginController(ScreenService, UtilService, LoginRepository){

	this.login = function(row){
		var email = row.email;
		var password = row.password;
		if ((email == null) || (email == '')){
			ScreenService.showMessage('Informe o e-mail.');
		} else if ((password == null) || (password == '')){
			ScreenService.showMessage('Informe a senha.');
		} else {
			var params = {
				'email' : email,
				'password' : password
			};
			UtilService.serverCall('login', params, function(response){
				if (response.result){
					LoginRepository.save(response.data).then(function(){
						ScreenService.openWindow('map');
					});
				} else {
					ScreenService.showMessage(response.data);	
				}
			});
		}
	};

};

Configuration(function(ContextRegister){
	ContextRegister.register('LoginController', LoginController);
});