'use strict';
const Sequelize = require('sequelize');
const db = require('./db');
const Hotel = require('./hotel');
const Place = require('./place');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

// require all the models

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
