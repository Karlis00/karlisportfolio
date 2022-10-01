exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the contact.ejs in views folder
    res.render('contact', {
        title: "Kam's Portfolio",
        page: "Contact Me", 
        img: "img/email.png",
        imgAlt: "An Email Picture"
    });
    };
    