var express = require('express');
var router = express.Router();

/* GET servicos listing. */
router.get('/', function(req, res, next) {
  
  id = req.query.id;
  req.getConnection(function(err,connection){    

    if (id) {

      connection.query('SELECT * FROM servicos where svc_id = ?',[id],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    }  else {

      connection.query('SELECT * FROM servicos',[],function(err,result){
          if(err) return res.status(400).json(err);
          return res.status(200).json(result);
      });

    }

  });
});


router.post('/alterar', function(req, res, next) {  
  
  id = req.query.id;
  descricao = req.query.d;
  titulo = req.query.t;
  conteudo = req.query.c;

  req.getConnection(function(err,connection){
  	connection.query(
  	  'update servicos set svc_descricao = ?, ' +
	  ' svc_titulo = ?, svc_conteudo = ? where svc_id = ?', 
	  [descricao, titulo, conteudo, id],
  	function(err,result){
        if(err) return res.status(400).json(err);
        return res.status(200).json(result);
    });  
  });
});



module.exports = router;
