var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/niko', function(req, res, next) {
//   res.render('index', { title: 'Niko' });
// });

// router.get('/about', function(req, res, next) {
//   res.render('about', { title: 'About page' });
// });

// router.get('/pauline', function(req, res, next) {
//   res.render('pauline.jade', { title: 'Pauline' });
// });

module.exports = router;
