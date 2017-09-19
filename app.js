var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var connection  = require('express-myconnection');

var users = require('./routes/usuarios');
/*var cadastros = require('./routes/cadastros');
var trabalhos = require('./routes/trabalhos');
var blog = require('./routes/blog');
var email = require('./routes/email');
*/
var app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(
   connection(mysql,{
     host: 'localhost',
     user: 'root',
     password : '',
     port : 3306, //port mysql
     //port: 41890,
     database:'doismaisdois'
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


app.use(express.static(__dirname + '/www'));

app.use('/bower_components',express.static(path.join(__dirname, 'www/bower_components')));
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
