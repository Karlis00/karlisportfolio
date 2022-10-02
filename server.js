process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();

var host = 'localhost';
var port = process.env.PORT || 5000;


app.listen(port);

console.log(`Server running at http://${host}:${port}`);

module.exports = app;
