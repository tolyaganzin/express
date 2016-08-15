var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/form', function(req, res) {
  res.send(req.params);
  });

router.post('/form', function(req, res) {
  console.log(req.body);
  //res.json({status: 'success'})
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/contacts', function(err, db) {
    if (err) {
      res.send(err);
      throw err;
    }
    db.collection('checks').insert(req.body);
    db.collection('checks').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    res.send(result);
    });
  });


  // res.send(req.body.fildes);
});

module.exports = router;
