(function() {
    'use strict';
    angular
        .module('WeatherCtrl', ['ngAudio'])
        .controller('WeatherController', WeatherController);

    function WeatherController($scope, ngAudio, $http, weatherDataService) {

        $scope.tagline = 'Ambient weathercasting with...';
        $scope.info = {};
        $scope.city = '';
        $scope.img = '';
        $scope.aud = '';
        $scope.getForecast = getForecast;

        function getForecast(city) {

            weatherDataService.getCurrent(city)
                .then(function(data) {

                    $scope.info.data = data.data;

                })
                .then(function() {

                    var dataImage = $scope.info.data.weather[0].main;
                    $scope.city = $scope.info.data.name;
                    if (dataImage === 'Clear') {
                        $scope.img = '../img/oakland-clear.jpg';
                        $scope.aud = '../sounds/clear.mp3';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Clouds') {
                        $scope.img = '../img/clouds.jpg';
                        $scope.aud = 'sounds/breeze.mp3';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Snow') {
                        $scope.img = '../img/snow.jpg';
                        $scope.aud = '';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Rain') {
                        $scope.img = '../img/rain3.jpg';
                        $scope.aud = '';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Thunderstorm') {
                        $scope.img = '../img/thunderstorm.jpg';
                        $scope.aud = '';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Drizzle' || 'Mist') {
                        $scope.img = '../img/lightrain.jpg';
                        $scope.aud = '';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Extreme') {
                        $scope.img = '../img/extreme.jpg';
                        $scope.aud = '';
                        ngAudio.play($scope.aud);
                    } else if (dataImage === 'Atmosphere' || 'Haze') {
                        $scope.img = '../img/haze.jpg';
                        $scope.aud = '';
                        ngAudio.play($scope.aud);
                    }

                });

        }

    }

})();
