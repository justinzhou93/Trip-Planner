var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
let Day = require('../../models/day');

router.get('/hotels',function(req,res,next){
  Hotel.findAll()
  .then(hotels=>{
    res.send(hotels);
  })
  .catch(next)
})

router.get('/restaurants',function(req,res,next){
  Restaurant.findAll()
  .then(restaurants=>{
    res.send(restaurants);
  })
  .catch(next)
})

router.get('/activities',function(req,res,next){
  Activity.findAll()
  .then(activities=>{
    res.send(activities);
  })
  .catch(next)
})

// router.param('id',function(req,res,next,id){
//
// })

router.get('/days', function(req,res,next){
  Day.findAll()
  .then(days=>{
    res.send(days);
  })
  .catch(next);
})

router.post('/days/:id/restaurants', function(req,res,next){

})

module.exports = router;
