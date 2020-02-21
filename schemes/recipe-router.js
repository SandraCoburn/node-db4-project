const express = require("express");
const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server couldn't deliver" });
    });
});

router.get("/:id", (req, res) => {
  Recipes.getRecipeById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server couldn't deliver" });
    });
});
router.get("/:id/steps", (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server couldn't deliver" });
    });
});

module.exports = router;
