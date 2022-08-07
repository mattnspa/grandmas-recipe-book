var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Grandma\'s recipes API', 
    endpoints: ['/api/recipes','/api/recipes/:id'] 
  });
});

module.exports = router;
