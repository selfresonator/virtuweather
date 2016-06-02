var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var helmet = require('helmet');
var methodOverride = require('method-override');

var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
