var path = require('path');
var fs = require('fs');
var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var gambUpload = multipart();
var jimp = require("jimp");
var dateTime = require('node-datetime');

router.get('/', function(req, res, next) {
  
  id = req.query.id;
  req.getConnection(function(err,connection){    

    if (id) {

      connection.query('SELECT * FROM casting where cas_id = ?',[id],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    }  else {

      connection.query('SELECT * FROM casting',[],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    }

  });
});


router.get('/buscar', function(req, res, next) {
  
  tipo = req.query.t;
  busca = req.query.b;

  req.getConnection(function(err,connection){        

    if (tipo == "nome" || tipo == "manequim" || tipo == "etnia" || tipo == "nacionalidade")
      connection.query('SELECT * FROM casting where cas_'+tipo+' like ?',['%' + busca + '%'],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    else
      connection.query('SELECT * FROM casting where cas_'+tipo+' = ?',[busca],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

  });
});

router.post('/adicionar', function(req, res, next) {
  
  tipo = req.query.tpo; 
  nome = req.query.nme; 
  nomeart = req.query.nma; 
  genero = req.query.gen;
  ano = req.query.ano;
  nacionalidade = req.query.nac;
  torax = req.query.trx;
  terno = req.query.trn;
  camisa = req.query.cms;
  busto = req.query.bst;
  cintura = req.query.ctr;
  quadril = req.query.qdl;
  etnia = req.query.etn;
  cabelo = req.query.cbl;
  olhos = req.query.olh; 
  peso = req.query.pes; 
  dtnasc = req.query.dtn; 
  rg = req.query.rg; 
  cpf = req.query.cpf; 
  cnh = req.query.cnh; 
  drt = req.query.drt; 
  endereco = req.query.end; 
  altura = req.query.alt; 
  manequim = req.query.mnq; 
  sapato = req.query.spt; 
  foto34 = req.query.f34;
  fotobody = req.query.fbd;
  fotosmile = req.query.fsm;
  carro = req.query.car;
  moto = req.query.mot;
  trator = req.query.tra; 
  jetski = req.query.jsk;
  portfolio = req.query.ptf;
  skills = req.query.sks;
  dadosbancarios = req.query.dbc; 
  usuarioId = req.query.uid;

  req.getConnection(function(err,connection){    
  connection.query('insert into casting ( ' +
  ' cas_tipo, cas_nome, cas_nomeart, cas_genero, cas_ano, cas_nacionalidade, cas_torax, cas_terno, cas_camisa, ' + 
  ' cas_busto, cas_cintura, cas_quadril, cas_etnia, cas_cabelo, ' +
	' cas_olhos, cas_peso, cas_dtnasc, cas_rg, cas_cpf, cas_cnh, cas_drt, cas_endereco, ' +
	' cas_altura, cas_manequim, cas_sapato, cas_foto34, cas_fotobody, cas_fotosmile, ' +
	' cas_carro, cas_moto, cas_trator, cas_jetski, cas_portfolio, cas_skills, cas_dadosbancarios, ' +
	' cas_usu_id, cas_datamodificacao) ' + 
	' values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now())',
		
    [tipo, nome, nomeart, genero, ano, nacionalidade, torax, terno, camisa, busto, cintura, quadril, etnia, cabelo, olhos, 
		peso, dtnasc, rg, cpf, cnh, drt, endereco, altura, manequim, sapato, foto34, fotobody,
		fotosmile, parseInt(carro), parseInt(moto), parseInt(trator), parseInt(jetski), portfolio, skills, dadosbancarios, usuarioId],
	function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });
  });
});

router.post('/excluir', function(req, res, next) {
  
  id = req.query.id;

  req.getConnection(function(err,connection){    
  connection.query('delete from casting where cas_id = ?',[id],function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });
  });
});

router.post('/alterar', function(req, res, next) {
  
  id = req.query.id;
  tipo = req.query.tpo;
  nome = req.query.nme;
  nomeart = req.query.nma;
  genero = req.query.gen;
  ano = req.query.ano;
  nacionalidade = req.query.nac;
  torax = req.query.trx;
  terno = req.query.trn;
  camisa = req.query.cms;
  busto = req.query.bst;
  cintura = req.query.ctr;
  quadril = req.query.qdl;
  etnia = req.query.etn;
  cabelo = req.query.cbl;
  olhos = req.query.olh; 
  peso = req.query.pes; 
  dtnasc = req.query.dtn; 
  rg = req.query.rg; 
  cpf = req.query.cpf; 
  cnh = req.query.cnh; 
  drt = req.query.drt; 
  endereco = req.query.end; 
  altura = req.query.alt; 
  manequim = req.query.mnq; 
  sapato = req.query.spt; 
  foto34 = req.query.f34;
  fotobody = req.query.fbd;
  fotosmile = req.query.fsm;
  carro = req.query.car;
  moto = req.query.mot;
  trator = req.query.tra; 
  jetski = req.query.jsk;
  portfolio = req.query.ptf;
  skills = req.query.sks;
  dadosbancarios = req.query.dbc; 
  usuarioId = req.query.uid;

  req.getConnection(function(err,connection){    
  connection.query('update casting set cas_tipo = ?, ' +
  ' cas_nome = ?, cas_nomeart = ?, cas_genero = ?, cas_ano = ?, cas_nacionalidade = ?, cas_torax = ?, cas_terno = ?, cas_camisa = ?, ' + 
  ' cas_busto = ?, cas_cintura = ?, cas_quadril = ?, cas_etnia = ?, cas_cabelo = ?, ' +
  ' cas_olhos = ?, cas_peso = ?, cas_dtnasc = ?, cas_rg = ?, cas_cpf = ?, cas_cnh = ?, cas_drt = ?, cas_endereco = ?, ' +
  ' cas_altura = ?, cas_manequim = ?, cas_sapato = ?, ' + 
  ' cas_foto34 = ?, cas_fotobody = ?, cas_fotosmile = ?, ' +
  ' cas_carro = ?, cas_moto = ?, cas_trator = ?, cas_jetski = ?, cas_portfolio = ?, cas_skills = ?, cas_dadosbancarios = ?, ' +
  ' cas_usu_id = ?, cas_datamodificacao = now() where cas_id = ?', 
  [tipo, nome, nomeart, genero, ano, nacionalidade, torax, terno, camisa, busto, cintura, quadril, etnia, cabelo, olhos, 
   peso, dtnasc, rg, cpf, cnh, drt, endereco, altura, manequim, sapato, foto34, fotobody,
   fotosmile, parseInt(carro), parseInt(moto), parseInt(trator), parseInt(jetski), portfolio, skills, dadosbancarios, usuarioId, id],
  function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });
  });
});



router.post('/upload', gambUpload, function(req, res) {  
  var f = req.files.file;
  var tempPath = f.path;

  var t = req.query.n;

  var w = 0;
  var h = 0;

  if (t.indexOf("f34" > -1)){
    w = 300;
    h = 400;
  } else {
    w = 700;
    h = 1000;
  }

  

  console.log(t);

  var targetPath = path.resolve('./www'+t);
  

  if (path.extname(f.originalFilename).toLowerCase() === '.png' ||
      path.extname(f.originalFilename).toLowerCase() === '.jpg' ||
      path.extname(f.originalFilename).toLowerCase() === '.jpeg')

  {

      console.log(tempPath);
      console.log(targetPath);

      jimp.read(tempPath).then(function (img) {
          img.resize(w, h).quality(72).write(targetPath);
          return res.status(200).json(targetPath);
      }).catch(function (err) {
          console.error(err);
      });      
  
  }
  else return res.status(200).json("0");

});



module.exports = router;
