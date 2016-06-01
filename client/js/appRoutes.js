angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/home.html',
        // controller: 'MainController'
        templateUrl: 'views/currentWeather.html',
        controller: 'WeatherController'
      })
      // .when('/weather', {
      //   templateUrl: 'views/currentWeather.html',
      //   controller: 'WeatherController'
      // });

  }
]);
