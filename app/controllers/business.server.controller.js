/*
COMP 229 Assignment 2 - business.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 14, 2022
*/
var Contact = require('../models/business');

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
        
    //to render the business.ejs in views folder

    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('business', {
                title: "Kam's Portfolio",
                page: 'Business Contact List', 
                ContactList: contactList
            });            
        }
    });
    
};
    