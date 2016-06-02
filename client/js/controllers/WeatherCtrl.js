(function() {
    'use strict';
    angular
        .module('WeatherCtrl', ['ngAudio'])
        .controller('WeatherController', WeatherController);

    function WeatherController($scope, ngAudio, $http, weatherDataService) {

        $scope.tagline = 'A virtual retreat to enjoy the silence of nature...';
        $scope.info = {};
        $scope.city = '';

        $scope.getForecast = function(city) {

            weatherDataService.getCurrent(city)
                .then(function(data) {
                    $scope.info.data = data.data;
                })
                .then(function() {
                    $scope.city = $scope.info.data.name;
                });
                
        };

    }

})();
