/*
COMP 229 Assignment 2 - aboutMe.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the aboutme.ejs in views folder
    res.render('aboutme', {
        title: "Kam's Portfolio",
        login: req.isAuthenticated(),
        username: req.params.username,
        page: "About Me", 
        img: "img/profilepic.jpg",
        logo: "img/logo.png",
        imgAlt: "My Profile Picture"
    });
    };
    