'use strict';

const router = require('express').Router();
// const db = require('../models/').models;
const Hotel = require('../models/hotel.js')
const Activity = require('../models/activity.js')
const Place = require('../models/place.js')
const Restaurant = require('../models/restaurant.js')
var Promise = require('bluebird');


router.get('/', function (req, res, next) {
  const hotelList = Hotel.findAll({});
  const restaurantList = Restaurant.findAll({});
  // const placeList = Place.findAll({});
  const activityList = Activity.findAll({});
  Promise.all([
    hotelList, restaurantList, activityList
    ]
).then(
	function(thingsToDo){
    console.log(thingsToDo)
    var hotels = thingsToDo[0];
    var restaurants = thingsToDo[1];
    var activities = thingsToDo[2];
		res.render('index', {
      hotels:hotels,
      restaurants:restaurants,
      activities:activities
    });
	}

).catch(next);




  //res.render('index');
});

module.exports = router;
