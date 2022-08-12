var express = require('express');
var router = express.Router();
var ingredientsJson = require("../db/recipes.json");
var tools = require("../service/tools");

/**
 * Returns an array of integers of length @param length
 * with the highest value of @param maxVal
 * @function getArrayofRandomUniqueNumbers
 * @param {number} length length of the array
 * @param {number} maxVal highest integer in the array 
 * @returns {number[]}
 */
function getArrayofRandomUniqueNumbers(length,maxVal) {
  var arr = [];
  const maxRetries = 5;
  let retries = 0;
  while(arr.length < length && retries <= maxRetries){
      var r = Math.floor(Math.random() * maxVal);
      if(arr.indexOf(r) === -1) {
        arr.push(r);
        retries=0;
      }
      else retries++;
  }
  return (arr);
}

/* GET paginated list of all recipes. */
router.get('/', function(req, res, next) {
  res.json(tools.paginate(ingredientsJson.recipes, req.query.limit, req.query.page));
});

/* GET random list of recipe. */
router.get('/random', function(req, res, next) {
  const numRecipes = 3
  const indexes = getArrayofRandomUniqueNumbers(numRecipes, ingredientsJson.recipes.length);
  res.json(indexes.map(index => ingredientsJson.recipes[index]));
});

/* GET recipe with specific id. */
router.get('/search', function(req, res, next) {
  let query = "";
  if (req.query.q) query = req.query.q.toLowerCase();
  const recipeArr = ingredientsJson.recipes.filter(
    recipe => {return recipe.title.toLowerCase().includes(query);}
  );
  recipeArr.length > 0 ? 
    res.json(tools.paginate(recipeArr, req.query.limit, req.query.page)) :
    res.status(404).send('Recipes not found');
});

/* GET recipe with specific id. */
router.get('/id/:id', function(req, res, next) {
  const id = req.params.id; 
  for (let recipe of ingredientsJson.recipes) {
    if (recipe.id.toString() === id) {
      res.json(recipe);
      return;
    }
  }
  res.status(404).send('Recipe not found');
});



module.exports = router;
