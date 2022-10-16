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
                login: req.isAuthenticated(),
                username: req.body.username,
                page: 'Business Contact List', 
                ContactList: contactList
            });            
        }
    });
    
};

exports.renderEditPage = function (req, res, next) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('business/edit', {
                title: "Kam's Portfolio",
                page: 'Edit Contact List',
                contact: contactToEdit
            })  
        }
    })
};

exports.edit = function(req, res, next) {
        
    let id = req.params.id;

    let updateContact = Contact({
        "_id": id,
        "name": req.body.name,
        "tel": req.body.tel,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updateContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business');
        }
    });

    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business', {
                title: "Kam's Portfolio",
                page: 'Business Contact List', 
                ContactList: contactList
            });            
        }
    });
    
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             res.redirect('/business');
        }
    });
}

