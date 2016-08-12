var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.post('/form', function(req, res) {
  res.send('Your request has been received!');
});

module.exports = router;
