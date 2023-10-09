const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/recipesdb')

const recipeSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  imageType: String
})

const ingredientSchema = new mongoose.Schema({
  name: String
})

const grocerySchema = new mongoose.Schema({
  name: String
})

const Recipe = new mongoose.model('Recipe', recipeSchema);

const Ingredient = new mongoose.model('Ingredient', ingredientSchema);

const Grocery = new mongoose.model('Grocery', grocerySchema)

module.exports = {Recipe, Ingredient, Grocery}