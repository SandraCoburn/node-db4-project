exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
      tbl.string("food_category");
      tbl.string("preparation_time");
      tbl.integer("servings");
      tbl.string("instructions");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ing_name", 128)
        .notNullable()
        .unique();
      tbl.string("ing_amount");
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl.string("description", 225).notNullable();
      tbl.integer("step_no").notNullable();
      s;
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onUpdate("RESTRICT");
    })
    .createTable("recipe_ing", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfItExists("recipe_ing")
    .dropTableIfItExists("steps")
    .dropTableIfItExists("ingredients")
    .dropTableIfItExists("recipes");
};
