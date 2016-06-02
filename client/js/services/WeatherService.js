angular
    .module('WeatherService', ['WeatherCtrl'])
    .factory('weatherDataService', weatherDataService);


function weatherDataService($http) {

    return {
        getCurrent: getCurrent
    };

    function getCurrent(city) {
        return $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?APPID=10b6dff0fe8074bc06adae019b23ab06&q={' + city + '}&units=imperial'
        });
    }

}
