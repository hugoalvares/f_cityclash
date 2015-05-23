var fw = {
	test : function(str) {
		var data = {
			string : str
		};
		fw.callServer(data);
	},

	callServer : function(params) {
		$.ajax({
			url: "http://127.0.0.1/",
			type: "GET",
			dataType: "json",
			data: params,
			contentType: "application/json",
			cache: false,
			timeout: 30000,
			success: function(data) {
				console.log('server call success');
				console.log(data);
			},
			error: function() {
				console.log('server call error');
			}
		});
  	}
}