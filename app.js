var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


const jsonParser = bodyParser.json();

const {ShoppingList} = require('./models');

app.use(logger('common'));




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



//var express = require('express'),
  //  app = express(),
 //   script(src='http://localhost:4000/socket.io/socket.io.js')
//

(function() {
	console.log('adf')
  //var io;
  //io = require('socket.io').listen(4000);
  //io.sockets.on('connection', function(socket) {
   var server = require('http').createServer(app);
    
   var io = require('socket.io').listen(server);
   
   //server.listen(process.env.PORT || 4000);
   server.listen(4000);

  //io = require('socket.io').listen;
  io.sockets.on('connection', function(socket) {

    socket.on('drawClick', function(data) {
      socket.broadcast.emit('draw', {
        x: data.x,
        y: data.y,
        type: data.type
      });
    });
  });
}).call(this);




app.get('/shopping-list', (req, res) => {
  res.json({'animal':'puppy'});
  console.log(ShoppingList.get())
  // res.json(ShoppingList.get());
});


module.exports = app;
