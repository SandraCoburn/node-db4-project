exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      id: 1,
      recipe_name: "Salsa",
      food_category: "Apetizer",
      preparation_time: "20min",
      servings: 5,
      instructions: "Blend all ingredients together"
    },
    {
      id: 2,
      recipe_name: "Teriyaki Chicken",
      food_category: "Poultry",
      preparation_time: "60 min",
      servings: 4,
      instructions: "Put teriyaki sauce over chicken, bake for an hour"
    },
    {
      id: 3,
      recipe_name: "Hummus",
      food_category: "Apetizer",
      preparation_time: "10min",
      servings: 5,
      instructions: "Blend all ingredients together"
    },
    {
      id: 4,
      recipe_name: "Fruit Salad",
      food_category: "Dessert",
      preparation_time: "20min",
      servings: 5,
      instructions: "Chop up fruit, add dressing, mix all ingredients together"
    }
  ]);
};
