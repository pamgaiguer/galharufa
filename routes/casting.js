var path = require('path');
var express = require('express');
var router = express.Router();
var jimp = require("jimp");
let formidable = require('formidable')

router.get('/', function (req, res, next) {

  const { cas_tipo, id } = req.query;
  req.getConnection(function (err, connection) {
    if (id) {
      connection.query('SELECT * FROM casting where cas_id = ?', [id], function (err, result) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(result);
      });

    } else {
      if(cas_tipo){
        connection.query('SELECT * FROM casting where cas_tipo = ?', [cas_tipo], function (err, result) {
          if (err) return res.status(400).json(err);
          return res.status(200).json(result);
        });
      }else{
        connection.query('SELECT * FROM casting', [], function (err, result) {
          if (err) return res.status(400).json(err);
          return res.status(200).json(result);
        });
      }

    }

  });
});


router.get('/buscar', function (req, res, next) {

  tipo = req.query.t;
  busca = req.query.b;

  req.getConnection(function (err, connection) {

    if (tipo == "nomeart" || tipo == "nome" || tipo == "manequim" || tipo == "etnia" || tipo == "nacionalidade")
      connection.query('SELECT * FROM casting where lcase(cas_' + tipo + ') like ?', ['%' + busca.toLowerCase() + '%'], function (err, result) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(result);
      });

    else
      connection.query('SELECT * FROM casting where lcase(cas_' + tipo + ') = ?', [busca.toLowerCase()], function (err, result) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(result);
      });

  });
});

router.post('/adicionar', function (req, res, next) {

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
  const youtube = req.body.youtube;
  const youtube2 = req.body.youtube2;
  const vimeo = req.body.vimeo;
  const vimeo2 = req.body.vimeo2;
  skills = req.query.sks;
  dadosbancarios = req.query.dbc;
  usuarioId = req.query.uid;
  email = req.query.email;
  phone = req.query.phone;
  mobile = req.query.mobile;
  const habilidade = req.body.habilidade;

  req.getConnection(function (err, connection) {
    connection.query('insert into casting ( ' +
      ' cas_tipo, cas_nome, cas_nomeart, cas_genero, cas_ano, cas_nacionalidade, cas_torax, cas_terno, cas_camisa, ' +
      ' cas_busto, cas_cintura, cas_quadril, cas_etnia, cas_cabelo, ' +
      ' cas_olhos, cas_peso, cas_dtnasc, cas_rg, cas_cpf, cas_cnh, cas_drt, cas_endereco, ' +
      ' cas_altura, cas_manequim, cas_sapato, cas_foto34, cas_fotobody, cas_fotosmile, ' +
      ' cas_carro, cas_moto, cas_trator, cas_jetski, cas_portfolio, cas_youtube2, cas_vimeo, cas_vimeo2, cas_skills, cas_dadosbancarios, ' +
      ' cas_usu_id, cas_datamodificacao, cas_email, cas_phone, cas_mobile, cas_habilidade) ' +
      ' values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(),?,?,?,?)',

      [tipo, nome, nomeart, genero, ano, nacionalidade, torax, terno, camisa, busto, cintura, quadril, etnia, cabelo, olhos,
        peso, dtnasc, rg, cpf, cnh, drt, endereco, altura, manequim, sapato, foto34, fotobody,
        fotosmile, parseInt(carro), parseInt(moto), parseInt(trator), parseInt(jetski), youtube, youtube2, vimeo, vimeo2, skills,
        dadosbancarios, usuarioId, email, phone, mobile, habilidade],
      function (err, result) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(result);
      });
  });
});

router.post('/excluir', function (req, res, next) {

  id = req.query.id;

  req.getConnection(function (err, connection) {
    connection.query('delete from casting where cas_id = ?', [id], function (err, result) {
      if (err) return res.status(400).json(err);
      return res.status(200).json(result);
    });
  });
});

router.post('/alterar', function (req, res, next) {

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
  const youtube = req.body.youtube;
  const youtube2 = req.body.youtube2;
  const vimeo = req.body.vimeo;
  const vimeo2 = req.body.vimeo2;
  skills = req.query.sks;
  dadosbancarios = req.query.dbc;
  usuarioId = req.query.uid;
  email = req.query.email;
  phone = req.query.phone;
  mobile = req.query.mobile;
  const habilidade = req.body.habilidade;

  console.log('changing casting on server', habilidade)

  req.getConnection(function (err, connection) {
    connection.query('update casting set cas_tipo = ?, ' +
      ' cas_nome = ?, cas_nomeart = ?, cas_genero = ?, cas_ano = ?, cas_nacionalidade = ?, cas_torax = ?, cas_terno = ?, cas_camisa = ?, ' +
      ' cas_busto = ?, cas_cintura = ?, cas_quadril = ?, cas_etnia = ?, cas_cabelo = ?, ' +
      ' cas_olhos = ?, cas_peso = ?, cas_dtnasc = ?, cas_rg = ?, cas_cpf = ?, cas_cnh = ?, cas_drt = ?, cas_endereco = ?, ' +
      ' cas_altura = ?, cas_manequim = ?, cas_sapato = ?, ' +
      ' cas_foto34 = ?, cas_fotobody = ?, cas_fotosmile = ?, ' +
      ' cas_carro = ?, cas_moto = ?, cas_trator = ?, cas_jetski = ?, cas_portfolio = ?, cas_youtube2 = ?, cas_vimeo = ?, cas_vimeo2 = ?, ' +
      ' cas_skills = ?, cas_dadosbancarios = ?, ' +
      ' cas_usu_id = ?, cas_datamodificacao = now(), '+
      ' cas_email = ?, cas_phone = ?, cas_mobile = ?, cas_habilidade = ? '+
      'where cas_id = ?',
      [tipo, nome, nomeart, genero, ano, nacionalidade, torax, terno, camisa, busto, cintura, quadril, etnia, cabelo, olhos,
        peso, dtnasc, rg, cpf, cnh, drt, endereco, altura, manequim, sapato, foto34, fotobody,
        fotosmile, parseInt(carro), parseInt(moto), parseInt(trator), parseInt(jetski), youtube, youtube2, vimeo, vimeo2, skills,
        dadosbancarios, usuarioId, email, phone, mobile, habilidade, id],
      function (err, result) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(result);
      });
  });
});



router.post('/upload', function (req, res) {
  let form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    // `file` is the name of the <input> field of type `file`
    let ft34 = files.ft34
    let ftbd = files.ftbd
    let ftsm = files.ftsm

    let savePhoto = (photo, new_file_name, w, h) => {

      let old_path = photo.path
      let file_size = photo.size
      let file_ext = photo.name.split('.').pop()
      let index = old_path.lastIndexOf('/') + 1
      let file_name = old_path.substr(index)

      if (file_ext !== 'png' &&
        file_ext !== 'jpg' &&
        file_ext !== 'jpeg')
        return res.status(200).json("0");

      let new_path = path.join(process.env.PWD, 'www/images/casting/',
        new_file_name + '.' + file_ext);

      // old_path = path.join(old_path, photo.name)
      jimp.read(old_path).then(function (img) {
        img.resize(w, h).quality(72).write(new_path);
        return res.json(new_path);
      }).catch(function (err) {
        console.error(err);
      });
    }

    let nma = req.query.name.replace(/\s/gm, '');

    if (ft34) savePhoto(ft34, `ft34_${nma}`, 300, 400)
    if (ftbd) savePhoto(ftbd, `ftbd_${nma}`, 700, 1000)
    if (ftsm) savePhoto(ftsm, `ftsm_${nma}`, 700, 1000)
  });

});



module.exports = router;
