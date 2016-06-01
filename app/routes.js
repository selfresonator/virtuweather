// grab the nerd model we just created
var City = require('./models/cityForecast.js');
var Q = require('q');
var path = require('path');

module.exports = function(app) {
  app.get('/api/cities', function(req, res) {
    // use mongoose to get all cities in the database
    City.find(function(err, cities) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }
      res.json(cities);
    });
  });

  app.post('/api/putCity', function(req,res) {
    var findOne = Q.nbind(City.findOne, City);

    findOne({city:req.body.city})
      .then(function(city) {
        if (city) {
          next(new Error('City already exist!'));
        } else {
          // make a new user if not one
          create = Q.nbind(City.create, City);
          var newCity = {
            city: req.body.city
          };
          console.log(newCity);
          return create(newCity);
        }
      });
  });
};
