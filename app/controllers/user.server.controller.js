/*
COMP 229 Assignment 2 - user.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 15, 2022
*/

let express = require('express');
let router = express.Router;
let mongoose = require('mongoose');
let passport = require('passport');

//User Model
let userModel = require('../models/users')
let User = userModel.User;

exports.loginRender = function(req, res, next) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
        if(!req.user)
        {
            res.render('login', {
                title: "Kam's Portfolio",
                page: "Log In",
                login: req.isAuthenticated(),
                username: req.body.username,
                messages: req.flash('loginMessage'),
                displayName: req.user ? req.user.displayName: ''
            });
        }
        else
        {
        return res.redirect('/');
        }

    };
    
exports.loginProcess = function(req, res, next) {
        passport.authenticate('local',
        (err, user, info) => {
        if(err)
        {
            return next(err);
        }
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => {
            if(err)
            {
                return next(err);
            }
            return res.redirect('/business');
        
        });
        })(req,res,next);
}

exports.registerRender = function(req, res, next) {
        if (req.session.lastVisit) {
            console.log(req.session.lastVisit);
            }
            req.session.lastVisit = new Date();
        
            if(!req.user)
            {
                res.render('auth/register', {
                    title: "Kam's Portfolio",
                    page: "Register",
                    login: req.isAuthenticated(),
                    username: req.body.username,
                    messages: req.flash('registerMessage'),
                    displayName: req.user ? req.user.displayName: ''
                });
            }
            else
            {
            return res.render('/');
            }
        };

exports.registerProcess = function(req, res, next) {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err)=>{
    if(err)
    {
       console.log("Error: Inserting New User");
       if (err.name == "UserExistsError") 
       {
         req.flash(
            'registerMessage', 'Registration Error: User Already Exists.'
         );
         console.log('err: exist user')
       }
       return res.render('auth/register',{
        title: "Kam's Portfolio",
        page: "Register",
        login: req.isAuthenticated(),
        username: req.body.username,
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName: ''
       })
    }
    else
    {
        //if no err, successfully register

        //redirect and authercate
        return passport.authenticate('local')(req,res,()=>{
            res.redirect('/business')
        })
    }

})
}

exports.logoutProcess = function (req, res, next) {
    req.logout((err)=>{
        if (err) { return next(err); }
    });
    res.redirect('/');

}