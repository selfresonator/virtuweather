(function() {
    'use strict';
    angular
        .module('WeatherCtrl', ['ngAudio'])
        .controller('WeatherController', WeatherController);

    function WeatherController($scope, ngAudio, $http, weatherDataService) {

        $scope.tagline = 'A virtual retreat to enjoy the silence of nature...';
        $scope.info = {};
        $scope.city = '';
        $scope.img = '';

        $scope.getForecast = function(city) {

            weatherDataService.getCurrent(city)
                .then(function(data) {
                    console.log(data);
                    $scope.info.data = data.data;
                })
                .then(function() {
                    var dataImage = $scope.info.data.weather[0].main;
                    console.log(dataImage);
                    if (dataImage === 'Clear') {
                      $scope.img = '../img/oakland-clear.jpg';
                    } else if (dataImage === 'Clouds') {
                      $scope.img = '../img/oakland-cloudy.jpg';
                    } else if (dataImage === 'Snow') {
                      $scope.img = '../img/snow.jpg';
                    } else if (dataImage === 'Rain') {
                      $scope.img = '../img/rain1.jpg';
                    } else if (dataImage === 'Thunderstorm') {
                      $scope.img = '../img/thunderstorm.jpg';
                    } else if (dataImage === 'Drizzle' || 'Mist') {
                      $scope.img = '/../img/lightrain.jpg';
                    } else if (dataImage === 'Extreme') {
                      $scope.img = '/../img/extreme.jpg';
                    } else if (dataImage === 'Atmosphere') {
                      $scope.img = '/../img/oakland-hazy.jpg';
                    }
                    console.log($scope.img);
                    $scope.city = $scope.info.data.name;
                });

        };

    }

})();
