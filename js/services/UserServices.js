var app = angular.module('galharufa.services.UserServices', []);

app.service('UserServices', function ($q, $http, Configs) {

	console.log("UserServices :: Iniciado");

	var self = {
		isLoading:false,
		isLogged:false,
		currentUser: {},

		login: function (login, pwd) {
			var d = $q.defer();
			$http.post(Configs.apiUrl+'login.php', {login, pwd, token:Configs.appToken})
			.success(function (data) {     
				if (data.success == 1) {
					self.user_data = data.user;
					d.resolve(1);
				} else {
					self.user_data = [];
					d.resolve(0);
				}
			})
			.error(function (data, status, headers, config) {
                console.log("err data 2 : " + JSON.stringify(data));
				d.reject(data);
			});
			return d.promise;
		},
		
		saveUserLocalStorage: function() {			
			window.localStorage['currentUser'] = JSON.stringify(self.currentUser);
		},
	    deleteUserLocalStorage: function(){   
	   		window.localStorage.removeItem('currentUser');
	  	},
		loadUserLocalStorage: function(){
			self.currentUser =  JSON.parse(window.localStorage['currentUser'] || '{}');			
		},

		

		validarCpf: function(strCPF){
			self.isLoading = true;

			d = $q.defer();
   			Soma = 0;
   			valido = true;
			if (strCPF == "00000000000") valido = false;
			
			for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
			Resto = (Soma * 10) % 11;
			if ((Resto == 10) || (Resto == 11)) Resto = 0;
   			if (Resto != parseInt(strCPF.substring(9, 10)) ) valido = false;   				
   			Soma = 0;
   			for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
   			Resto = (Soma * 10) % 11;
   			if ((Resto == 10) || (Resto == 11))  Resto = 0;
   			if (Resto != parseInt(strCPF.substring(10, 11) ) ) valido = false;

   			self.isLoading = false;
   			d.resolve(valido);   			
   			return d.promise;
		},
		
		esqueceuSenha: function(email){
			var d = $q.defer();
			$http.post(Configs.apiUrl+'esqueceuSenha', {email, token:Configs.appToken})
			.success(function (data) {
				console.log(data.success);
				if (data.success == 1) {
					d.resolve(true);
				}
				else {
					d.resolve(false);
				}
			})
			.error(function (data, status, headers, config) {
				console.log("err data 2 : " + JSON.stringify(data));
				d.reject(data);
			});
			return d.promise;
		}

	};

	return self;
})
;
