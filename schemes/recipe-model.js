const db = require("../db-config");

module.exports = {
  getRecipes,
  getRecipeById,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}
function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}
function getInstructions(id) {
  return db("recipes")
    .join("steps", "steps.recipe_id", "recipes.id")
    .select("steps.step_no", "steps.description")
    .where("recipes.id", id);
}
