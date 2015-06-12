function RegisterController(ScreenService, UtilService, LoginRepository){

	this.back = function(){
		ScreenService.openWindow('index');
	};

	this.register = function(row){
		var nickname = row.nickname;
		var email = row.email;
		var password = row.password;
		if ((nickname == null) || (nickname == '')){
			ScreenService.showMessage('Informe o apelido.');
		} else if ((email == null) || (email == '')){
			ScreenService.showMessage('Informe o e-mail.');
		} else if ((password == null) || (password == '')){
			ScreenService.showMessage('Informe a senha.');
		} else {
			var params = {
				'nickname' : nickname,
				'email' : email,
				'password' : password
			};
			UtilService.serverCall('register', params, function(response){
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
	ContextRegister.register('RegisterController', RegisterController);
});