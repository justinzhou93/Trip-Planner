var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/TripPlanner', {
  logging: false
});

module.exports = db;