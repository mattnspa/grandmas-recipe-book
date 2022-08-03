var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const recipes = [
    {id: 1, name: "recipe 1", ingredients: "flour"},
    {id: 2, name: "recipe 2", ingredients: "water"},
    {id: 3, name: "recipe 3", ingredients: "juice"},
    {id: 4, name: "recipe 4", ingredients: "sugar"}
  ]
  res.json(recipes)
});

module.exports = router;
