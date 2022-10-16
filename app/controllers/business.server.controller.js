/*
COMP 229 Assignment 2 - business.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 16, 2022
*/
var Contact = require('../models/business');

module.exports.render = function(req, res) {
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

            res.render('business', {
                title: "Kam's Portfolio",
                login: req.isAuthenticated(),
                page: 'Business Contact List', 
                logo: "img/logo.png",
                ContactList: contactList
            });            
        }
    });
    
};

module.exports.renderEditPage = function (req, res, next) {
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
                login: req.isAuthenticated(),
                logo: "/img/logo.png",
                contact: contactToEdit
            })  
        }
    })
};

module.exports.edit = function(req, res, next) {
        
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
    
};

module.exports.delete = (req, res, next) => {
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

module.exports.renderAddPage = (req, res, next) => {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    let id = req.params.id;
    res.render('business/add', {
        title: "Kam's Portfolio",
        page: 'Add Contact List',
        login: req.isAuthenticated(),
        logo: "/img/logo.png",
    })            
}

module.exports.add = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "tel": req.body.tel,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business page
            res.redirect('/business');
        }
    });

}