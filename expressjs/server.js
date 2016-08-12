var express = require('express');
var helmet = require('helmet');
var routes = require('./routes/routes');
var path    = require("path");
var app = express();
/*
app.set('views', './views');
app.set('view engine', 'jade');////////    jade     //////
app.set('trust proxy', 1); // trust first proxy
*/
app.use(express.static('frontend'));
app.use('/api', routes);/// routing
app.use(helmet());/// helmet


// define the home page route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/frontend/index.html'));
});


///  port listening  ////
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
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
