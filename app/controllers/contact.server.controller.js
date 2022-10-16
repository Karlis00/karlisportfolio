/*
COMP 229 Assignment 2 - contact.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/
exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the contact.ejs in views folder
    res.render('contact', {
        title: "Kam's Portfolio",
        login: req.isAuthenticated(),   
        username: req.body.username,    
        page: "Contact Me", 
        img: "img/email.png",
        logo: "img/logo.png",
        imgAlt: "An Email Picture"
    });
    };
    