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