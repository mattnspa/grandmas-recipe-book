var express = require('express');
var router = express.Router();
var ingredientsJson = require("../db/recipes.json");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

/**
 * Return a paginated data object.
 * @param {[]} data List of recipes
 * @returns {{}} paginated json.
 */
function paginate(data,queryLimit,queryPage) {
  minLimit = 1
  maxLimit = 4
  const limit = parseInt(queryLimit) ? Math.min(Math.max(parseInt(queryLimit),minLimit),maxLimit) : maxLimit;
  minPage = 1
  maxPage = Math.ceil(data.length / limit)
  const page = parseInt(queryPage) ? Math.min(Math.max(parseInt(queryPage),minPage),maxPage) : minPage;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  // const nextPage = (endIndex < data.length) ? page + 1 : null

  let result = {};
  let paging = {};
  if (endIndex < data.length) {
    paging.nextPage = page + 1
  }
  if (startIndex > 1) {
    paging.previousPage = page - 1
  }
  paging = {...paging,currentPage: page, lastPage: maxPage, startIndex: startIndex, endIndex: endIndex};
  return {paging: paging, data: data.slice(startIndex, endIndex)};
  
}

/* GET paginated list of all recipes. */
router.get('/', function(req, res, next) {
  res.json(paginate(ingredientsJson.recipes, req.query.limit, req.query.page));
});

/* GET random list of recipe. */
router.get('/random', function(req, res, next) {
  const numRecipes = 3
  const indexes = getArrayofRandomUniqueNumbers(numRecipes, ingredientsJson.recipes.length);
  res.json(indexes.map(index => ingredientsJson.recipes[index]));
});

/* GET recipe with specific id. */
router.get('/search', function(req, res, next) {
  const query = req.query.q
  const recipeArr = ingredientsJson.recipes.filter(
    recipe => {return recipe.title.toLowerCase().includes(query);}
  );
  recipeArr.length > 0 ? 
    res.json(paginate(recipeArr, req.query.limit, req.query.page)) :
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
