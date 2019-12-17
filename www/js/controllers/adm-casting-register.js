angular.module('galharufa.controllers.adm-casting-register', [])


  .directive("myMaterialSelect", ["$timeout", function ($timeout) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, AdminCastingRegCtrl) {
        $(function () {
          $(element).material_select();
          $(element).change(function () {
            AdminCastingRegCtrl.$setViewValue($(element).val());
          });
        });
      }
    }
  }])

  .controller('AdminCastingRegCtrl', function ($scope, $rootScope, $q, $timeout, $location, FileUploader, UserServices, CastingServices, $sce) {

    var uploader = $scope.uploader = new FileUploader({
      url: '/casting/upload'
    });

    $scope.vm = {
      'isLoading': false,
      'state': 'insert',
      'casting': {
        'tpo': 'Ator',
        'nme': '',
        'nma': '',
        'gen': '',
        'ano': 0,
        'nac': '',
        'trx': 0,
        'trn': 0,
        'cms': 0,
        'bst': 0,
        'ctr': 0,
        'qdl': 0,
        'etn': '',
        'cbl': '',
        'olh': '',
        'pes': 0,
        'dtn': '',
        'rg': '',
        'cpf': '',
        'cnh': '',
        'drt': '',
        'end': '',
        'alt': 0,
        'mnq': 0,
        'spt': 0,
        //'f34' : '',
        //'fbd' : '',
        //'fsm' : '',
        'car': false,
        'mot': false,
        'tra': false,
        'jsk': false,
        'youtube': '',
        'youtube2': '',
        'vimeo': '',
        'vimeo2': '',
        'sks': '',
        'dbc': '',
        'uid': 0,
        email: '',
        phone: '',
        mobile: '',
        habilidades: []
      }
    }

    $scope.init = function () {
      // console.log("startou o adm Casting");
      $rootScope.headerId = 2;
      $rootScope.hold = false;
      $rootScope.session_title = 'Dash - Casting - Cadastro';
      if (UserServices.currentUser.usu_id == undefined) $location.path('/login');


      if (CastingServices.casting.cas_id != undefined) {
        $scope.vm.state = "alter";

        var dataNascimento = new Date(CastingServices.casting.cas_dtnasc);
        // console.log(dataNascimento);

        $scope.vm.casting.id = CastingServices.casting.cas_id;
        $scope.vm.casting.tpo = CastingServices.casting.cas_tipo;
        $scope.vm.casting.nme = CastingServices.casting.cas_nome;
        $scope.vm.casting.nma = CastingServices.casting.cas_nomeart;
        $scope.vm.casting.gen = CastingServices.casting.cas_genero;
        $scope.vm.casting.ano = CastingServices.casting.cas_ano;
        $scope.vm.casting.nac = CastingServices.casting.cas_nacionalidade;
        $scope.vm.casting.trx = CastingServices.casting.cas_torax;
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
        $scope.vm.casting.rg = CastingServices.casting.cas_rg;
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
        $scope.vm.casting.youtube = CastingServices.casting.cas_portfolio;
        $scope.vm.casting.youtube2 = CastingServices.casting.youtube2;
        $scope.vm.casting.vimeo = CastingServices.casting.vimeo;
        $scope.vm.casting.vimeo2 = CastingServices.casting.vimeo2;
        $scope.vm.casting.sks = CastingServices.casting.cas_skills;
        $scope.vm.casting.dbc = CastingServices.casting.cas_dadosbancarios;
        $scope.vm.casting.uid = CastingServices.casting.cas_usu_id;
        $scope.vm.casting.email = CastingServices.casting.cas_email;
        $scope.vm.casting.phone = CastingServices.casting.cas_phone;
        $scope.vm.casting.mobile = CastingServices.casting.cas_mobile;

        // Load habilities
        $scope.vm.casting.habilidades = CastingServices.casting.cas_habilidade.split(';');
      } else {
        $scope.vm.state = "insert";
      }

      var data = []
      $scope.vm.casting.habilidades.forEach(function (e) {
        data.push({ tag: e })
      })
      $('.chips').material_chip({
        data: data
      })
    }

    function getHabilidades () {
      var t = $('.chips').data().chips.reduce(function (acc, curr) {
        return (typeof acc == 'string' ? acc : acc.tag) + ';' + curr.tag
      })

      return t
    }

    $scope.adicionar = function () {
      var img34Ext = "";
      var imgBdExt = "";
      var imgSmExt = "";
      var img34 = "";
      var imgBd = "";
      var imgSm = "";

      for (let index = 0; index < uploader.queue.length; index++) {
        const element = uploader.queue[index];

        element.url = '/casting/upload?name=' + $scope.vm.casting.nme

        if (element.alias === 'ft34') {
          img34Ext = element.file.name.slice((element.file.name.lastIndexOf(".") - 1 >>> 0) + 2)
          img34 = "/images/casting/ft34_" + $scope.vm.casting.nme.replace(/\s/g, "") + "." + img34Ext
        }
        else if (element.alias === 'ftbd') {
          imgBdExt = element.file.name.slice((element.file.name.lastIndexOf(".") - 1 >>> 0) + 2)
          imgBd = "/images/casting/ftbd_" + $scope.vm.casting.nme.replace(/\s/g, "") + "." + imgBdExt
        }
        else if (element.alias === 'ftsm') {
          imgSmExt = element.file.name.slice((element.file.name.lastIndexOf(".") - 1 >>> 0) + 2)
          imgSm = "/images/casting/ftsm_" + $scope.vm.casting.nme.replace(/\s/g, "") + "." + imgSmExt
        }
      }

      dataNascimento = tratarDateTime($scope.vm.casting.dtn);

      CastingServices.addCasting(
        $scope.vm.casting.tpo, $scope.vm.casting.nme, $scope.vm.casting.nma,
        $scope.vm.casting.gen, $scope.vm.casting.ano, $scope.vm.casting.nac,
        tratarDecimal($scope.vm.casting.trx), tratarDecimal($scope.vm.casting.trn),
        tratarDecimal($scope.vm.casting.cms), tratarDecimal($scope.vm.casting.bst),
        tratarDecimal($scope.vm.casting.ctr), tratarDecimal($scope.vm.casting.qdl),
        $scope.vm.casting.etn, $scope.vm.casting.cbl,
        $scope.vm.casting.olh, tratarDecimal($scope.vm.casting.pes), dataNascimento,
        $scope.vm.casting.rg, $scope.vm.casting.cpf, $scope.vm.casting.cnh,
        $scope.vm.casting.drt, $scope.vm.casting.end, tratarDecimal($scope.vm.casting.alt),
        $scope.vm.casting.mnq, tratarDecimal($scope.vm.casting.spt),
        img34 != "" ? img34 : CastingServices.casting.cas_foto34,
        imgBd != "" ? imgBd : CastingServices.casting.cas_fotobody,
        imgSm != "" ? imgSm : CastingServices.casting.cas_fotosmile,
        $scope.vm.casting.car, $scope.vm.casting.mot, $scope.vm.casting.tra,
        $scope.vm.casting.jsk, $scope.vm.casting.youtube, $scope.vm.casting.youtube2,
        $scope.vm.casting.vimeo, $scope.vm.casting.vimeo2, $scope.vm.casting.sks,
        $scope.vm.casting.dbc, UserServices.currentUser.usu_id, $scope.vm.casting.email,
        $scope.vm.casting.phone, $scope.vm.casting.mobile, getHabilidades()
      )
        .then(function (r) {
          $scope.upload();

          Materialize.toast($scope.vm.casting.nma + ' inserido com sucesso!', 4000);
          $rootScope.path("/adm-casting-search");
        });
    }

    $scope.alterar = function () {
      var img34Ext = "";
      var imgBdExt = "";
      var imgSmExt = "";
      var img34 = "";
      var imgBd = "";
      var imgSm = "";

      for (let index = 0; index < uploader.queue.length; index++) {
        const element = uploader.queue[index];
        element.url = '/casting/upload?name=' + $scope.vm.casting.nme

        if (element.alias === 'ft34') {
          img34Ext = element.file.name.slice((element.file.name.lastIndexOf(".") - 1 >>> 0) + 2)
          img34 = "/images/casting/ft34_" + $scope.vm.casting.nme.replace(/\s/g, "") + "." + img34Ext
        }
        else if (element.alias === 'ftbd') {
          imgBdExt = element.file.name.slice((element.file.name.lastIndexOf(".") - 1 >>> 0) + 2)
          imgBd = "/images/casting/ftbd_" + $scope.vm.casting.nme.replace(/\s/g, "") + "." + imgBdExt
        }
        else if (element.alias === 'ftsm') {
          imgSmExt = element.file.name.slice((element.file.name.lastIndexOf(".") - 1 >>> 0) + 2)
          imgSm = "/images/casting/ftsm_" + $scope.vm.casting.nme.replace(/\s/g, "") + "." + imgSmExt
        }
      }

      dataNascimento = tratarDateTime($scope.vm.casting.dtn);

      CastingServices.alterCasting($scope.vm.casting.id,
        $scope.vm.casting.tpo, $scope.vm.casting.nme, $scope.vm.casting.nma,
        $scope.vm.casting.gen, $scope.vm.casting.ano, $scope.vm.casting.nac,
        tratarDecimal($scope.vm.casting.trx), tratarDecimal($scope.vm.casting.trn),
        tratarDecimal($scope.vm.casting.cms), tratarDecimal($scope.vm.casting.bst),
        tratarDecimal($scope.vm.casting.ctr), tratarDecimal($scope.vm.casting.qdl),
        $scope.vm.casting.etn, $scope.vm.casting.cbl,
        $scope.vm.casting.olh, tratarDecimal($scope.vm.casting.pes), dataNascimento,
        $scope.vm.casting.rg, $scope.vm.casting.cpf, $scope.vm.casting.cnh,
        $scope.vm.casting.drt, $scope.vm.casting.end, tratarDecimal($scope.vm.casting.alt),
        $scope.vm.casting.mnq, tratarDecimal($scope.vm.casting.spt), 
        img34 != "" ? img34 : CastingServices.casting.cas_foto34,
        imgBd != "" ? imgBd : CastingServices.casting.cas_fotobody,
        imgSm != "" ? imgSm : CastingServices.casting.cas_fotosmile,
        $scope.vm.casting.car, $scope.vm.casting.mot, $scope.vm.casting.tra,
        $scope.vm.casting.jsk, $scope.vm.casting.youtube, $scope.vm.casting.youtube2,
        $scope.vm.casting.vimeo, $scope.vm.casting.vimeo2, $scope.vm.casting.sks,
        $scope.vm.casting.dbc, UserServices.currentUser.usu_id, $scope.vm.casting.email,
        $scope.vm.casting.phone, $scope.vm.casting.mobile, getHabilidades()
      )

        .then(function (r) {
          $scope.upload()

          Materialize.toast($scope.vm.casting.tpo + ' alterado com sucesso!', 4000);
          $rootScope.path("/adm-casting-search");
        });

    }

    $scope.upload = function (file, n) {
      uploader.uploadAll()
    }

    $scope.embbedVideo = function () {
      $scope.vm.embbedYoutube = ''
      $scope.vm.embbedYoutube2 = ''
      $scope.vm.embbedVimeo = ''
      $scope.vm.embbedVimeo2 = ''

      if ($scope.vm.casting.youtube !== '') {
        $scope.vm.embbedYoutube = $sce.trustAsResourceUrl(
          $scope.vm.casting.youtube.replace('watch?v=', 'embed/')
        )
      }

      if ($scope.vm.casting.youtube2 !== '') {
        $scope.vm.embbedYoutube2 = $sce.trustAsResourceUrl(
          $scope.vm.casting.youtube2.replace('watch?v=', 'embed/')
        )
      }

      if ($scope.vm.casting.vimeo !== '') {
        $scope.vm.embbedVimeo = $sce.trustAsResourceUrl(
          'https://player.vimeo.com/video/' + $scope.vm.casting.vimeo.split("/").pop()
        )
      }

      if ($scope.vm.casting.vimeo2 !== '') {
        $scope.vm.embbedVimeo2 = $sce.trustAsResourceUrl(
          'https://player.vimeo.com/video/' + $scope.vm.casting.vimeo2.split("/").pop()
        )
      }
    }


    tratarDateTime = function (dt) {
      if (dt.length < 10) return "";

      dia = dt.substr(0, 2);
      mes = dt.substr(3, 2);
      ano = dt.substr(6, 4);

      return ano + "-" + mes + "-" + dia;
    }

    tratarDecimal = function (dc) {
      dc += "";
      return dc.replace(".", "").replace(",", ".");
    }

  });
