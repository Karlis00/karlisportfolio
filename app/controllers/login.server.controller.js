/*
COMP 229 Assignment 1 - index.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/
exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the index.ejs in views folder
    res.render('login', {
        title: "Kam's Portfolio",
        page: "Log In"
    });
    };
    