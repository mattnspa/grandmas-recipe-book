var express = require('express');
var router = express.Router();

const RECIPES = [
  {id: 1, name: "recipe 1", ingredients: "flour", image: "https://i.imgur.com/8FIsiTh.jpg"},
  {id: 2, name: "recipe 2", ingredients: "water", image: "https://i.imgur.com/zjmH0IL.jpg"},
  {id: 3, name: "recipe 3", ingredients: "juice", image: "https://i.imgur.com/2DGDjXn.jpg"},
  {id: 4, name: "recipe 4", ingredients: "sugar", image: "https://i.imgur.com/imzpAvT.jpg"},
  {id: 5, name: "recipe 5", ingredients: "flour", image: "https://i.imgur.com/eJFkZiE.jpg"},
  {id: 6, name: "recipe 6", ingredients: "water", image: "https://i.imgur.com/OfXA2oT.jpg"},
  {id: 7, name: "recipe 7", ingredients: "juice", image: "https://i.imgur.com/JTkjR7r.jpg"},
  {id: 8, name: "recipe 8", ingredients: "sugar", image: "https://i.imgur.com/6ldknnX.jpg"},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(RECIPES)
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id; 
  for (let recipe of RECIPES) {
    if (recipe.id.toString() === id) {
      res.json(recipe);
      return;
    }
  }
  res.status(404).send('Book not found');

});
module.exports = router;
