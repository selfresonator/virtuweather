angular.module('appRoutes', [])

.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/currentWeather.html',
                controller: 'WeatherController'
            });

    }

]);
