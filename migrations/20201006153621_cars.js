
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments()
      tbl.string("vin").notNullable().unique().index()
      tbl.string("make", 36).notNullable().index()
      tbl.string("model", 36).notNullable().index()
      tbl.integer("milage").notNullable()
      tbl.string("transmission")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
