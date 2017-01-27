'use strict';

const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost/TripPlanner');

module.exports = db;
