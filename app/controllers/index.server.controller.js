/*
COMP 229 Assignment 2 - index.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/
exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the index.ejs in views folder
    res.render('index', {
        title: "Kam's Portfolio",
        login: req.isAuthenticated(),
        username: req.body.username,
        statement: "State The Problem. Solve The Problem.", 
        img: "img/rings.gif",
        logo: "img/logo.png",
        imgAlt: "Rings of problem stating and solving"
    });
    };
    