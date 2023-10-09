const { Recipe, Ingredient, Grocery } = require('./db.js')

module.exports = {
  getRecipes: (req, res) => {
    // const query = req
    Recipe
      .find({})
      .exec()
      .then((results) => res.send(results))
      .catch((err) => console.log(err))

  },
  getIngredients: (req, res) => {
    Ingredient
      .find({})
      .exec()
      .then((results) => res.send(results))
      .catch((err) => console.log(err))
  },
  getGroceries: (req, res) => {
    const query = req
    Grocery
      .find({})
      .exec()
      .then((results) => res.send(results))
      .catch((err) => console.log(err))
  }
}