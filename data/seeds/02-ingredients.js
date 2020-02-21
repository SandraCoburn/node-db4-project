exports.seed = function(knex) {
  return knex("ingredients").insert([
    { id: 1, ing_name: "green chillies", ing_amount: "2" },
    { id: 2, ing_name: "cilantro", ing_amount: "half a cup" },
    { id: 3, ing_name: "lime juice", ing_amount: "1Tb" },
    { id: 4, ing_name: "diced onion", ing_amount: "2Tb" },
    { id: 5, ing_name: "garlic", ing_amount: "1 clove" },
    { id: 6, ing_name: "Chicken", ing_amount: "1lb" },
    { id: 7, ing_name: "teriyaki sauce", ing_amount: "1 cup" },
    { id: 8, ing_name: "garbanzo beans", ing_amount: "1 cup" },
    { id: 9, ing_name: "tahini paste", ing_amount: "1/2 cup" },
    { id: 10, ing_name: "grapes", ing_amount: "1/2 cup" },
    { id: 11, ing_name: "oranges", ing_amount: "1/2 cup" },
    { id: 12, ing_name: "apples", ing_amount: "1/2 cup" },
    { id: 13, ing_name: "whipped cream", ing_amount: "1/2 cup" }
  ]);
};
