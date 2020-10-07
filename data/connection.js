const knex = require("knex")

const knexfile = require("../knexfile")

const enviornment = process.env.NODE_ENV || "development"

const config = knexfile[enviornment]

module.exports = knex(config)