const $clearHotel = $('.remove')
const $clearRestaurant = $('.remove')
const $clearActivity = $('.remove')
const $dayClear = $('#day-title .remove')
const $addHotel = $('.hoteladd')
const $addRestaurant = $('.restaurantadd')
const $addActivity = $('.activityadd')
const $dayAdd = $('#day-add')
const $days = $('.day-buttons')
let count = 1;
let days = [];
let hotelMarkers = [];
let restaurantMarkers = [];
let activityMarkers = [];

$addHotel.on('click', function(){
  var hotelSelector = document.getElementById('hotel-choices');
  var hotelHTML = hotelSelector.options[hotelSelector.selectedIndex].value;
  const $newHotel = $('<span class="title">'+ hotelHTML +'</span>');
  $('#hotel .itinerary-item button:last-child').before($newHotel);
  let hotelPlace;
  for (let i = 0; i < hotels.length; i++){
    if (hotels[i].name === hotelHTML){
      hotelPlace = hotels[i];
    }
  }
  drawMarker('hotel', hotelPlace.place.location);
})

$addRestaurant.on('click', function(){
  var restaurantSelector = document.getElementById('restaurant-choices');
  var restaurantHTML = restaurantSelector.options[restaurantSelector.selectedIndex].value;
  const $newRestaurant = $(
    '<div class="'+restaurantHTML+'">' +
      '<span class="title">'+ restaurantHTML +'</span>' +
      '<button class="btn btn-xs btn-danger remove btn-circle">x</button>' +
    '</div>'
  );
  $('#restaurant .itinerary-item').after($newRestaurant);
  let restaurantPlace;
  for (let i = 0; i < restaurants.length; i++){
    if (restaurants[i].name === restaurantHTML){
      restaurantPlace = restaurants[i];
    }
  }
  drawMarker('restaurant', restaurantPlace.place.location);
})

$addActivity.on('click', function(){
  var activitySelector = document.getElementById('activity-choices');
  var activityHTML = activitySelector.options[activitySelector.selectedIndex].value;
  const $newActivity = $('<span class="title">'+ activityHTML +'</span>');
  $('#activity .itinerary-item button:last-child').before($newActivity);
  let activityPlace;
  for (let i = 0; i < activities.length; i++){
    if (activities[i].name === activityHTML){
      activityPlace = activities[i];
    }
  }
  drawMarker('activity', activityPlace.place.location);
})

$('#hotel .itinerary-item').on('click',$clearHotel,function(evt){
  evt.preventDefault();
  $('#hotel .itinerary-item span:nth-last-child(2)').remove();
  hotelMarkers.pop().setMap(null);
})

$('#restaurant .itinerary-item').on('click',$clearRestaurant,function(evt){
  evt.preventDefault();
  $('#restaurant .itinerary-item span:nth-last-child(2)').remove();
  restaurantMarkers.pop().setMap(null);
})

$('#activity .itinerary-item').on('click',$clearActivity,function(evt){
  evt.preventDefault();
  $('#activity .itinerary-item span:nth-last-child(2)').remove();
  activityMarkers.pop().setMap(null);
})

$dayAdd.on('click', function(){
  count++;
  const $newDay = $('<button class="btn btn-circle day-btn">'+count+'</button>')
  $('.day-buttons button:last-child').before($newDay);
  days.push({
    hotel:[],
    restaurant:[],
    activity:[]
  })
})

$('#day-title>button').on('click', function(){
  $('.day-buttons button:nth-last-child(2)').remove();
  count--;
})
