var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  id = req.query.id;
  req.getConnection(function(err,connection){

    if (id) {

      connection.query('SELECT * FROM usuarios where usu_id = ?',[id],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    }  else {

      connection.query('SELECT * FROM usuarios where usu_tipo > 0',[],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    }

  });
});


router.post('/autenticar', function(req, res, next) {

  login = req.query.l;
  senha = req.query.s;

  req.getConnection(function(err,connection){
    if (err) {
      console.error(err)
      throw err
    }

    connection.query('SELECT * FROM usuarios where usu_login = ? and usu_senha = ?',[login, senha],function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });
  });
});


router.post('/adicionar', function(req, res, next) {

  nome = req.query.n;
  login = req.query.l;
  senha = req.query.s;

  req.getConnection(function(err,connection){
  connection.query('insert into usuarios (usu_nome, usu_login, usu_senha, usu_tipo) values (?, ?, ?, ?)',[nome, login, senha, 1],function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });
  });
});

router.post('/excluir', function(req, res, next) {

  id = req.query.id;

  req.getConnection(function(err,connection){
  connection.query('delete from usuarios where usu_id = ?',[id],function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });
  });
});



module.exports = router;
