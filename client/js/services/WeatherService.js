angular.module('WeatherService', ['WeatherCtrl'])

.factory('showWeather', function($http) {
  var getCurrent = function(city) {
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?APPID=10b6dff0fe8074bc06adae019b23ab06&q={'+ city +'}&units=imperial'
    });
  };

  var showCity = function() {
   return $http({
     method: 'GET',
     url: '/api/cities'
   });
  };

  var saveCity = function(city) {
    return $http({
      method: 'POST',
      url: '/api/putCity',
      data: {'city': city}
    });
  };

  return {
    getCurrent: getCurrent,
    showCity: showCity,
    saveCity: saveCity
  };
});
