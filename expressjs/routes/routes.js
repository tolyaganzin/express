var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/form', function(req, res) {
  console.log(req.body);
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/contacts', function(err, db) {
    if (err) {
      res.send(err);
      throw err;
    }
    db.collection('checks').insert(req.body);
    res.send('Waiting for answer please');
  });
});

module.exports = router;
