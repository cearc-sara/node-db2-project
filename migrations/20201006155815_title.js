
exports.up = function(knex) {
  return knex.schema.createTable("title", tbl => {
      tbl.increments()
      tbl.boolean("clean").defaultTo(false)
      tbl.boolean("salvaged").defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("title")
};
