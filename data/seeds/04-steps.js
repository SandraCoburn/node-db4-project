exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { id: 1, description: "broil vegetables", step_no: 1, recipe_id: "1" },
        { id: 2, description: "cut garlic small", step_no: 2, recipe_id: "1" },
        { id: 3, description: "put in blender", step_no: 3, recipe_id: "1" },
        { id: 4, description: "cut chicken", step_no: 1, recipe_id: "2" },
        {
          id: 5,
          description: "add teriyaki sauce",
          step_no: 2,
          recipe_id: "2"
        },
        { id: 6, description: "bake at 400", step_no: 3, recipe_id: "2" },
        {
          id: 7,
          description: "wash garbanzo beans",
          step_no: 1,
          recipe_id: "3"
        },
        {
          id: 8,
          description: "put garbanzos in blender",
          step_no: 2,
          recipe_id: "3"
        },
        {
          id: 10,
          description: "add lime and garlic",
          step_no: 3,
          recipe_id: "3"
        },
        { id: 11, description: "cut up fruit", step_no: 1, recipe_id: "4" },
        {
          id: 12,
          description: "add whipped cream",
          step_no: 2,
          recipe_id: "4"
        },
        { id: 13, description: "Mix well", step_no: 3, recipe_id: "4" }
      ]);
    });
};
