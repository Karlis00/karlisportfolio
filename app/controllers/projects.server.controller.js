exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the projects.ejs in views folder
    res.render('projects', {
        title: "Kam's Portfolio",
        page: "Projects", 
        projectImg1: "img/Project1.png",
        projectImg2: "img/Project2.png",
        projectImg3: "img/Project3.png",
        projectAlt1: "Screenshot of ongoing education application: Nexxus",
        projectAlt2: "Screenshot of Real Estate Website Demo",
        projectAlt3: "Screenshot of Mobile Services Website Demo"
    });
    };
    