var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/contacts', function(req, res) {
  console.log(req.body);
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/users', function(err, db) {
    if (err) {
      res.send(err);
      throw err;
    }
    db.collection('contacts').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
      console.log(result);
    });
  });
});


router.post('/form', function(req, res) {
  console.log(req.body);
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/users', function(err, db) {
    if (err) {
      res.send(err);
      throw err;
    }
    db.collection('contacts').insert(req.body);
    res.send('Expect ! We will call you back.');
  });
});

module.exports = router;
