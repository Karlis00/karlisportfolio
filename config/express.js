/* 
COMP 229 Assignment 1 - express.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/

var config = require('./env/development'),
session = require('express-session'),
express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');
const { defaultConfiguration } = require('../server.js');

// database setup
let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});

module.exports = function() {
var app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

// order matters
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

require('../app/routes/index.server.routes.js')(app);
return app;
};
