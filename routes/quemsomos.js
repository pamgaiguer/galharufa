const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const id = 1;

  req.getConnection(function (err, connection) {
    connection.query(
      'select qsm_descricao from quemsomos' +
      ' where qsm_id = ?',
      [id],
      function (err, result) {
        if (err) return res.status(400).json(err);

        if (!result.length) res.status(400).json({message: 'Sem QuemSomos cadastrador'});
        
        return res.status(200).json(result[0]);
      });
  });
})

router.post('/', function (req, res, next) {

  const id = 1;
  const quemsomos = req.body.newText;

  req.getConnection(function (err, connection) {
    connection.query(
      'update quemsomos set qsm_descricao = ?' +
      ' where qsm_id = ?',
      [quemsomos, id],
      function (err, result) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(result);
      });
  });
});

module.exports = router;