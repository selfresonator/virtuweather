angular.module('WeatherCtrl', ['ngAudio'])

.controller('WeatherController', function($scope,showWeather,ngAudio,$http) {
  $scope.tagline = 'A virtual retreat to enjoy the silence of nature...';
  $scope.info = {};
  $scope.city = '';
  $scope.list  = {};
  var obj = {};
  $scope.getForecast = function(city) {
    showWeather.saveCity(city);
    showWeather.getCurrent(city)
      .then(function(data) {
        $scope.info.data = data.data;
      })
      .then(function() {
        $scope.city = $scope.info.data.name;
      });
    showWeather.showCity()
      .then(function(data) {
        console.log('city data:', data.data);
        $scope.list = data.data;
      });
  };
});
