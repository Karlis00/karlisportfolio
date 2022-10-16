/* 
COMP 229 Assignment 1 - express.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/

let config = require('./env/development'),
express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');
const { defaultConfiguration } = require('../server.js');

// modules for authentication
let session = require('express-session'),
passport = require('passport'),
passportLocal = require('passport-local'),
localStrategy = passportLocal.Strategy,
flash = require('connect-flash');

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

//setup express session
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: config.sessionSecret
}));

//intialize flash
app.use(flash());

//intialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user config

//create a User Model Instance
let userModel = require('../app/models/users');
let User = userModel.User;

//implement a user auth strategy
passport.use(User.createStrategy());

//serialize and deserialize user information
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// set view path
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

require('../app/routes/index.server.routes.js')(app);
return app;
};
