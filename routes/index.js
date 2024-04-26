var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

/* GET LogIn page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});


module.exports = router;
