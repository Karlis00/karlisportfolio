exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the aboutme.ejs in views folder
    res.render('aboutme', {
        title: "Kam's Portfolio",
        page: "About Me", 
        img: "img/profilepic.jpg",
        imgAlt: "My Profile Picture"
    });
    };
    