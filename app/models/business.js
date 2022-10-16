/*
COMP 229 Assignment 2 - business.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 14, 2022
*/

let mongoose = require('mongoose');

var contactListModel = mongoose.Schema({
    name: String,
    tel: Number,
    email: String
},
{
    collection: "contactlist"
});

module.exports = mongoose.model('Contact', contactListModel);