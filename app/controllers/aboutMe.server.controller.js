/*
COMP 229 Assignment 1 - aboutMe.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the aboutme.ejs in views folder
    res.render('aboutme', {
        title: "Kam's Portfolio",
        page: "About Me", 
        img: "img/profilepic.jpg",
        imgAlt: "My Profile Picture"
    });
    };
    