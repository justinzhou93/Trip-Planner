$(function(){

  var findingHotels = $.get('/hotels')

  var findingRestaurants = $.get('/restaurants')

  var findingActivities = $.get('/activities')

  Promise.all([findingHotels,findingRestaurants,findingActivities])
  .then(function(allPromises){
    hotels = allPromises[0];
    restaurants = allPromises[1];
    activities = allPromises[2];
    console.log(restaurants);
    hotels.forEach(makeOption, $hotelSelect);
    restaurants.forEach(makeOption, $restaurantSelect);
    activities.forEach(makeOption, $activitySelect);
    attractionsModule.loadEnhancedAttractions('hotels', hotels);
    attractionsModule.loadEnhancedAttractions('restaurants', restaurants);
    attractionsModule.loadEnhancedAttractions('activities', activities);
  })
  .catch(console.error.bind(console));


})
