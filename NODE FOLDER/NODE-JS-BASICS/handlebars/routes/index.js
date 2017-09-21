var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test', condition: false });
});
  router.get('/form', function(req, res, next){
    res.render('form');
  });

router.post('/submit', function(req, res, next){
  console.log(req.body['test']);
  res.redirect('/');
});

module.exports = router;
