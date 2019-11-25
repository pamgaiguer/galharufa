var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var connection  = require('express-myconnection');

var users = require('./routes/usuarios');
var casting = require('./routes/casting');
var servicos = require('./routes/servicos');
var quemsomos = require('./routes/quemsomos');
var contato = require('./routes/contato');

var app = express();

app.all('*', function(req, res, next) {
  console.log('configurando protocolos');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.headers['x-forwarded-proto'] != 'https') {
    // checa se o header é HTTP ou HTTPS
    res.redirect("https://" + req.headers.host + req.url);
    // faz o redirect para HTTPS
  } else {
    next();
  }
});

app.use(
  connection(mysql,{
    host: 'mysql669.umbler.com',
    user: 'admagencia',
    password: 'agenciagalharufa',
    port : 41890, //port mysql
    database:'galharufa',
    typeCast: function castField( field, useDefaultTypeCasting ) {
      if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
        var bytes = field.buffer();
        return( bytes[0] === 1 );
      }
      return( useDefaultTypeCasting() );
    }
  },'request')
  );
  
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  
  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'www')));
  
  app.use('/usuarios', users);
  app.use('/casting', casting);
  app.use('/servicos', servicos);
  app.use('/quemsomos', quemsomos);
  app.use('/contato', contato);
  
  app.use(express.static(__dirname + '/www'));
  
  // app.use('/bower_components',express.static(path.join(__dirname, 'www/bower_components')));
  app.use('/js',express.static(path.join(__dirname, 'www/js')));
  app.use('/shared',express.static(path.join(__dirname, 'www/shared')));
  app.use('/styles',express.static(path.join(__dirname, 'www/styles')));
  
  app.use('/',function(req, res) {
    res.sendFile(__dirname + '/www/index.html');
  });
  
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;