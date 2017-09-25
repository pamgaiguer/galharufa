angular.module('galharufa.controllers.adm-casting-register', [])


.directive("myMaterialSelect", [ "$timeout", function($timeout) {
  return {
    restrict: 'A',
    require : 'ngModel',
    link : function(scope, element, attrs, AdminCastingRegCtrl) {
        $(function() {
            $(element).material_select();
            $(element).change(function() {
                AdminCastingRegCtrl.$setViewValue($(element).val());
            });
        });
    }
  }
}])

.controller('AdminCastingRegCtrl', function($scope, $rootScope, $q, $timeout, $location, Upload, UserServices, CastingServices) {

  console.log("AdminCastingRegCtrl :: Iniciado");

  $scope.vm = {    
    'isLoading':false,
    'state': 'insert',
    'casting': {
      'tpo' : 'Ator', 
      'nme' : '', 
      'nma' : '', 
      'gen' : '', 
      'ano' : 0,
      'trn' : 0, 
      'cms' : 0, 
      'bst' : 0, 
      'ctr' : 0, 
      'qdl' : 0, 
      'etn' : '', 
      'cbl' : '', 
      'olh' : '', 
      'pes' : 0, 
      'dtn' : '', 
      'rg'  : '', 
      'cpf' : '', 
      'cnh' : '', 
      'drt' : '', 
      'end' : '', 
      'alt' : 0, 
      'mnq' : 0, 
      'spt' : 0, 
      //'f34' : '', 
      //'fbd' : '', 
      //'fsm' : '', 
      'car' : false, 
      'mot' : false, 
      'tra' : false, 
      'jsk' : false, 
      'ptf' : '', 
      'sks' : '', 
      'dbc' : '', 
      'uid' : 0
    }
  }

  $scope.init = function () {
    console.log("startou o adm Casting");
    $rootScope.headerId = 2;
    $rootScope.session_title= 'Admin - Casting - Cadastro';
    if (UserServices.currentUser.usu_id == undefined) $location.path('/login');


    if (CastingServices.casting.cas_id != undefined){
      $scope.vm.state = "alter";

      var dataNascimento = new Date(CastingServices.casting.cas_dtnasc);
      console.log(dataNascimento);

      $scope.vm.casting.id =  CastingServices.casting.cas_id;
      $scope.vm.casting.tpo = CastingServices.casting.cas_tipo;
      $scope.vm.casting.nme = CastingServices.casting.cas_nome;
      $scope.vm.casting.nma = CastingServices.casting.cas_nomeart;
      $scope.vm.casting.gen = CastingServices.casting.cas_genero;
      $scope.vm.casting.ano = CastingServices.casting.cas_ano;
      $scope.vm.casting.trn = CastingServices.casting.cas_terno;
      $scope.vm.casting.cms = CastingServices.casting.cas_camisa;
      $scope.vm.casting.bst = CastingServices.casting.cas_busto;
      $scope.vm.casting.ctr = CastingServices.casting.cas_cintura;
      $scope.vm.casting.qdl = CastingServices.casting.cas_quadril;
      $scope.vm.casting.etn = CastingServices.casting.cas_etnia;
      $scope.vm.casting.cbl = CastingServices.casting.cas_cabelo;
      $scope.vm.casting.olh = CastingServices.casting.cas_olhos;
      $scope.vm.casting.pes = CastingServices.casting.cas_peso;
      $scope.vm.casting.dtn = ("0" + dataNascimento.getDate()).slice(-2) + "/" + ("0" + (dataNascimento.getMonth() + 1)).slice(-2) + "/" + dataNascimento.getFullYear();
      $scope.vm.casting.rg  = CastingServices.casting.cas_rg;
      $scope.vm.casting.cpf = CastingServices.casting.cas_cpf;
      $scope.vm.casting.cnh = CastingServices.casting.cas_cnh;
      $scope.vm.casting.drt = CastingServices.casting.cas_drt;
      $scope.vm.casting.end = CastingServices.casting.cas_endereco;
      $scope.vm.casting.alt = CastingServices.casting.cas_altura;
      $scope.vm.casting.mnq = CastingServices.casting.cas_manequim;
      $scope.vm.casting.spt = CastingServices.casting.cas_sapato;
      $scope.vm.casting.car = CastingServices.casting.cas_carro;
      $scope.vm.casting.mot = CastingServices.casting.cas_moto;
      $scope.vm.casting.tra = CastingServices.casting.cas_trator;
      $scope.vm.casting.jsk = CastingServices.casting.cas_jetski;
      $scope.vm.casting.ptf = CastingServices.casting.cas_portfolio;
      $scope.vm.casting.sks = CastingServices.casting.cas_skills;
      $scope.vm.casting.dbc = CastingServices.casting.cas_dadosbancarios;
      $scope.vm.casting.uid = CastingServices.casting.cas_usu_id; 


      console.log($scope.vm.casting);

      $('select').material_select();
    } else {
      $scope.vm.state = "insert";
    }
  }

  $scope.adicionar = function(){

    console.log($scope.vm.casting.f34);

    
    var img34Ext = "";
    var imgBdExt = "";
    var imgSmExt = "";
    var img34 = "";
    var imgBd = "";
    var imgSm = "";

    if ($scope.vm.casting.f34) img34Ext = $scope.vm.casting.f34.name.slice(($scope.vm.casting.f34.name.lastIndexOf(".") - 1 >>> 0) + 2);
    if ($scope.vm.casting.fbd) imgBdExt = $scope.vm.casting.fbd.name.slice(($scope.vm.casting.fbd.name.lastIndexOf(".") - 1 >>> 0) + 2);
    if ($scope.vm.casting.fsm) imgSmExt = $scope.vm.casting.fsm.name.slice(($scope.vm.casting.fsm.name.lastIndexOf(".") - 1 >>> 0) + 2);

    if ($scope.vm.casting.f34) img34 = "/styles/casting/ft34_" + $scope.vm.casting.nma.replace(/\s/g, "") + "." + img34Ext;
    if ($scope.vm.casting.fbd) imgBd = "/styles/casting/ftbd_" + $scope.vm.casting.nma.replace(/\s/g, "") + "." + imgBdExt;
    if ($scope.vm.casting.fsm) imgSm = "/styles/casting/ftsm_" + $scope.vm.casting.nma.replace(/\s/g, "") + "." + imgSmExt;


    CastingServices.addCasting(
      $scope.vm.casting.tpo, $scope.vm.casting.nme, $scope.vm.casting.nma, 
      $scope.vm.casting.gen, $scope.vm.casting.ano, $scope.vm.casting.trn, 
      $scope.vm.casting.cms, $scope.vm.casting.bst, $scope.vm.casting.ctr, 
      $scope.vm.casting.qdl, $scope.vm.casting.etn, $scope.vm.casting.cbl, 
      $scope.vm.casting.olh, $scope.vm.casting.pes, $scope.vm.casting.dtn, 
      $scope.vm.casting.rg,  $scope.vm.casting.cpf, $scope.vm.casting.cnh, 
      $scope.vm.casting.drt, $scope.vm.casting.end, $scope.vm.casting.alt, 
      $scope.vm.casting.mnq, $scope.vm.casting.spt, img34, imgBd, imgSm,      
      $scope.vm.casting.car, $scope.vm.casting.mot, $scope.vm.casting.tra, 
      $scope.vm.casting.jsk, $scope.vm.casting.ptf, $scope.vm.casting.sks, 
      $scope.vm.casting.dbc, UserServices.currentUser.usu_id)
    
    .then(function(r){
      console.log(r);

      if (r < 1) return;


      if ($scope.vm.casting.f34) $scope.upload($scope.vm.casting.f34, img34);
      if ($scope.vm.casting.fbd) $scope.upload($scope.vm.casting.fbd, imgBd);
      if ($scope.vm.casting.fsm) $scope.upload($scope.vm.casting.fsm, imgSm);


      $rootScope.path("/adm-casting-search");

    });
  }



  $scope.upload = function (file, n) {
    console.log(file);
    Upload.upload({
        method: "post",
        url: '/casting/upload/?n=' + n,
        data: {file: file}
    }).then(function (resp) {
      console.log(resp);      
        if (resp == 0) {
          console.log('erro no upload ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          //formato invalido, poe a magia aqui pam
        }
    }, function (resp) {
        console.log('Error status: ' + resp.status);
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });
  }





});