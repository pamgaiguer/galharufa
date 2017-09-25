var app = angular.module('galharufa.services.CastingServices', []);

app.service('CastingServices', function ($q, $http, Configs) {

  console.log("CastingServices :: Iniciado");

  var self = {
    isLoading:false,
    casting: {},
    
    getCastings: function(){
      var d = $q.defer();
      $http.get(Configs.apiUrl+'casting/')
      .then(function (r) {
        d.resolve(r.data);

      });
      return d.promise;
    },

    getCasting: function(id){
      var d = $q.defer();
      $http.get(Configs.apiUrl+'casting/?id=' + id)
      .then(function (r) {
        d.resolve(r.data);
      });
      return d.promise;
    },

    addCasting: function (tpo, nme, nma, gen, ano, trn, cms, bst, ctr, qdl, etn, cbl, olh, pes, dtn, rg, cpf, cnh, drt, end, alt, 
		mnq, spt, f34, fbd, fsm, car, mot, tra, jsk, ptf, sks, dbc, uid) {

      carro = car ? 1 : 0;
      moto = mot ? 1 : 0;
      trator = tra ? 1 : 0;
      jetski = jsk ? 1 : 0;

      var d = $q.defer();
      $http.post(Configs.apiUrl+'casting/adicionar?tpo='+tpo+'&nme='+nme+'&nma='+nma+
      	'&gen='+gen+'&ano='+ano+'&trn='+trn+'&cms='+cms+'&bst='+bst+'&ctr='+ctr+'&qdl='+qdl+
      	'&etn='+etn+'&cbl='+cbl+'&olh='+olh+'&pes='+pes+'&dtn='+dtn+'&rg='+rg+'&cpf='+cpf+
      	'&cnh='+cnh+'&drt='+drt+'&end='+end+'&alt='+alt+'&mnq='+mnq+'&spt='+spt+'&f34='+f34+
      	'&fbd='+fbd+'&fsm='+fsm+'&car='+carro+'&mot='+moto+'&tra='+trator+'&jsk='+jetski+
		    '&ptf='+ptf+'&sks='+sks+'&dbc='+ dbc+ '&uid='+uid)
      .then(function (r) {
        console.log(r);
        d.resolve(r.data.insertId);
      });

      return d.promise;
    },

    deleteCasting: function(id){
      var d = $q.defer();
      $http.post(Configs.apiUrl+'casting/excluir?id='+id)
      .then(function (r) {
        d.resolve(r.data.affectedRows);

      });

      return d.promise;
    },

  };

  return self;
})
;