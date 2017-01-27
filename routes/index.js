'use strict';

const router = require('express').Router();
const db = require('../models/').models;



router.get('/', function (req, res, next) {
Promise.all([
  db.restaurant.findAll(),
  db.hotel.findAll(),
  db.place.findAll({}),
  db.activity.findAll({})]
).then(
	function(stuff){
		res.json(stuff);
	}

).catch(next);




  //res.render('index');
});

module.exports = router;
