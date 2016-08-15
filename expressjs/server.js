var express = require('express');
// var helmet = require('helmet');
var bodyParser = require('body-parser');
var path    = require("path");
var app = express();
var routes = require('./routes/routes');
/*
app.set('views', './views');
app.set('view engine', 'jade');////////    jade     //////
app.set('trust proxy', 1); // trust first proxy
*/
// app.use(helmet());/// helmet

app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies
app.use('/api', routes);/// routing

// define the home page route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/frontend/index.html'));
});

app.use(express.static('frontend'));


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
    res.json(err.status, err);

    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.json(err.status, err);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
});
