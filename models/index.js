const database = require("../config/database");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(database.DB, database.USER, database.PASSWORD, {
    host: database.HOST,
    dialect: database.dialect,
    operatorsAliases: false,

    pool: {
        max: database.pool.max,
        min: database.pool.min,
        acquire: database.pool.acquire,
        idle: database.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user/index.js")(sequelize, Sequelize);

module.exports = db;