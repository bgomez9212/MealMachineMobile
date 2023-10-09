const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

// get from database
router.get('/recipes', controller.getRecipes)
router.get('/ingredients', controller.getIngredients)
router.get('/groceries', controller.getGroceries)

// add to database
// router.post('/recipes', controller.postRecipes)
// router.post('/ingredients', controller.postIngredients)
// router.post('/groceries', controller.postGroceries)

// from api

module.exports = router