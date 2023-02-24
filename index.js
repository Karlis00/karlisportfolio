var $hXvsm$mongoose = require("mongoose");
var $hXvsm$passportlocalmongoose = require("passport-local-mongoose");
var $hXvsm$express = require("express");
var $hXvsm$passport = require("passport");
require("morgan");
var $hXvsm$compression = require("compression");
var $hXvsm$bodyparser = require("body-parser");
var $hXvsm$methodoverride = require("method-override");
var $hXvsm$expresssession = require("express-session");
var $hXvsm$passportlocal = require("passport-local");
var $hXvsm$connectflash = require("connect-flash");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire1ed8"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire1ed8"] = parcelRequire;
}
parcelRequire.register("bzGOp", function(module, exports) {

$parcel$export(module.exports, "User", () => $86d42c328347e86d$export$1f44aaf2ec115b54, (v) => $86d42c328347e86d$export$1f44aaf2ec115b54 = v);
/*
COMP 229 Assignment 2 - user.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ //require modules
var $86d42c328347e86d$export$1f44aaf2ec115b54;


let $86d42c328347e86d$var$User = $hXvsm$mongoose.Schema({
    username: {
        type: String,
        default: "",
        trim: true,
        require: "Username is required."
    },
    email: {
        type: String,
        default: "",
        trim: true,
        require: "Email is required."
    },
    displayName: {
        type: String,
        default: "",
        trim: true,
        require: "Display name is required."
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "users"
});
//configure options for User Model
let $86d42c328347e86d$var$options = {
    missingPasswordError: "Wrong or missing password"
};
$86d42c328347e86d$var$User.plugin($hXvsm$passportlocalmongoose, $86d42c328347e86d$var$options);
$86d42c328347e86d$export$1f44aaf2ec115b54 = $hXvsm$mongoose.model("User", $86d42c328347e86d$var$User);

});

parcelRequire.register("hGCPw", function(module, exports) {
/*
COMP 229 Assignment 2 - index.server.routes.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ function $ce047ab93157b237$var$requireAuth(req, res, next) {
    //check if the user is logged in
    if (!req.isAuthenticated()) return res.redirect("/login");
    next();
}







module.exports = function(app) {
    var index = (parcelRequire("afMvL")), aboutMe = (parcelRequire("jK5F5")), projects = (parcelRequire("biUiW")), services = (parcelRequire("9uL8G")), contact = (parcelRequire("jV8JN")), user = (parcelRequire("jsKPp")), business = (parcelRequire("59UH3"));
    app.get("/", index.render);
    app.get("/aboutMe", aboutMe.render);
    app.get("/projects", projects.render);
    app.get("/services", services.render);
    app.get("/contact", contact.render);
    app.get("/login", user.loginRender);
    app.post("/login", user.loginProcess);
    app.get("/register", user.registerRender);
    app.post("/register", user.registerProcess);
    app.get("/logout", user.logoutProcess);
    app.get("/business", $ce047ab93157b237$var$requireAuth, business.render);
    app.get("/business/edit/:id", $ce047ab93157b237$var$requireAuth, business.renderEditPage);
    app.post("/business/edit/:id", $ce047ab93157b237$var$requireAuth, business.edit);
    app.get("/business/delete/:id", $ce047ab93157b237$var$requireAuth, business.delete);
    app.get("/business/add", $ce047ab93157b237$var$requireAuth, business.renderAddPage);
    app.post("/business/add", $ce047ab93157b237$var$requireAuth, business.add);
};

});
parcelRequire.register("afMvL", function(module, exports) {

$parcel$export(module.exports, "render", () => $7770ef6d6143191f$export$b3890eb0ae9dca99, (v) => $7770ef6d6143191f$export$b3890eb0ae9dca99 = v);
/*
COMP 229 Assignment 2 - index.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ var $7770ef6d6143191f$export$b3890eb0ae9dca99;
$7770ef6d6143191f$export$b3890eb0ae9dca99 = function(req, res) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    //to render the index.ejs in views folder
    res.render("index", {
        title: "Kam's Portfolio",
        login: req.isAuthenticated(),
        username: req.body.username,
        statement: "State The Problem. Solve The Problem.",
        img: "img/rings.gif",
        logo: "img/logo.png",
        imgAlt: "Rings of problem stating and solving"
    });
};

});

parcelRequire.register("jK5F5", function(module, exports) {

$parcel$export(module.exports, "render", () => $e5f6b47d8e951cfd$export$b3890eb0ae9dca99, (v) => $e5f6b47d8e951cfd$export$b3890eb0ae9dca99 = v);
/*
COMP 229 Assignment 2 - aboutMe.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ var $e5f6b47d8e951cfd$export$b3890eb0ae9dca99;
$e5f6b47d8e951cfd$export$b3890eb0ae9dca99 = function(req, res) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    //to render the aboutme.ejs in views folder
    res.render("aboutme", {
        title: "Kam's Portfolio",
        login: req.isAuthenticated(),
        username: req.params.username,
        page: "About Me",
        img: "img/profilepic.jpg",
        logo: "img/logo.png",
        imgAlt: "My Profile Picture"
    });
};

});

parcelRequire.register("biUiW", function(module, exports) {

$parcel$export(module.exports, "render", () => $83ad0d0e3401c511$export$b3890eb0ae9dca99, (v) => $83ad0d0e3401c511$export$b3890eb0ae9dca99 = v);
/*
COMP 229 Assignment 2 - project.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ var $83ad0d0e3401c511$export$b3890eb0ae9dca99;
$83ad0d0e3401c511$export$b3890eb0ae9dca99 = function(req, res) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    //to render the projects.ejs in views folder
    res.render("projects", {
        title: "Kam's Portfolio",
        page: "Projects",
        login: req.isAuthenticated(),
        username: req.body.username,
        projectImg1: "img/Project1.png",
        projectImg2: "img/Project2.png",
        projectImg3: "img/Project3.png",
        logo: "img/logo.png",
        projectAlt1: "Screenshot of ongoing education application: Nexxus",
        projectAlt2: "Screenshot of Real Estate Website Demo",
        projectAlt3: "Screenshot of Mobile Services Website Demo"
    });
};

});

parcelRequire.register("9uL8G", function(module, exports) {

$parcel$export(module.exports, "render", () => $6e9b7b3e09dfccef$export$b3890eb0ae9dca99, (v) => $6e9b7b3e09dfccef$export$b3890eb0ae9dca99 = v);
/*
COMP 229 Assignment 2 - services.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ var $6e9b7b3e09dfccef$export$b3890eb0ae9dca99;
$6e9b7b3e09dfccef$export$b3890eb0ae9dca99 = function(req, res) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    //to render the services.ejs in views folder
    res.render("services", {
        title: "Kam's Portfolio",
        page: "Services",
        serviceIcon1: "img/code.png",
        serviceIcon2: "img/itsupport.png",
        serviceIcon3: "img/dmarketing.png",
        serviceAlt1: "Icon of Coding",
        serviceAlt2: "Icon of IT Support",
        serviceAlt3: "Icon of Digital Marketing",
        logo: "img/logo.png",
        login: req.isAuthenticated(),
        username: req.body.username
    });
};

});

parcelRequire.register("jV8JN", function(module, exports) {

$parcel$export(module.exports, "render", () => $e80a1e51125ceafe$export$b3890eb0ae9dca99, (v) => $e80a1e51125ceafe$export$b3890eb0ae9dca99 = v);
/*
COMP 229 Assignment 2 - contact.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ var $e80a1e51125ceafe$export$b3890eb0ae9dca99;
$e80a1e51125ceafe$export$b3890eb0ae9dca99 = function(req, res) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    //to render the contact.ejs in views folder
    res.render("contact", {
        title: "Kam's Portfolio",
        login: req.isAuthenticated(),
        username: req.body.username,
        page: "Contact Me",
        img: "img/email.png",
        logo: "img/logo.png",
        imgAlt: "An Email Picture"
    });
};

});

parcelRequire.register("jsKPp", function(module, exports) {

$parcel$export(module.exports, "loginRender", () => $e2b4f4f045669c0f$export$9df9ef070f460605, (v) => $e2b4f4f045669c0f$export$9df9ef070f460605 = v);
$parcel$export(module.exports, "loginProcess", () => $e2b4f4f045669c0f$export$27dfb89c709c8b19, (v) => $e2b4f4f045669c0f$export$27dfb89c709c8b19 = v);
$parcel$export(module.exports, "registerRender", () => $e2b4f4f045669c0f$export$d96ee2e093b5a9f, (v) => $e2b4f4f045669c0f$export$d96ee2e093b5a9f = v);
$parcel$export(module.exports, "registerProcess", () => $e2b4f4f045669c0f$export$426c7c60c1e95651, (v) => $e2b4f4f045669c0f$export$426c7c60c1e95651 = v);
$parcel$export(module.exports, "logoutProcess", () => $e2b4f4f045669c0f$export$a95b4b6cfb36d7af, (v) => $e2b4f4f045669c0f$export$a95b4b6cfb36d7af = v);
/*
COMP 229 Assignment 2 - user.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 15, 2022
*/ var $e2b4f4f045669c0f$export$9df9ef070f460605;
var $e2b4f4f045669c0f$export$27dfb89c709c8b19;
var $e2b4f4f045669c0f$export$d96ee2e093b5a9f;
var $e2b4f4f045669c0f$export$426c7c60c1e95651;
var $e2b4f4f045669c0f$export$a95b4b6cfb36d7af;

let $e2b4f4f045669c0f$var$router = $hXvsm$express.Router;



var $bzGOp = parcelRequire("bzGOp");
let $e2b4f4f045669c0f$var$User = $bzGOp.User;
$e2b4f4f045669c0f$export$9df9ef070f460605 = function(req, res, next) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    if (!req.user) res.render("login", {
        title: "Kam's Portfolio",
        page: "Log In",
        logo: "img/logo.png",
        login: req.isAuthenticated(),
        username: req.body.username,
        messages: req.flash("loginMessage"),
        displayName: req.user ? req.user.displayName : ""
    });
    else return res.redirect("/");
};
$e2b4f4f045669c0f$export$27dfb89c709c8b19 = function(req, res, next) {
    $hXvsm$passport.authenticate("local", (err, user, info)=>{
        if (err) return next(err);
        if (!user) {
            req.flash("loginMessage", "Authentication Error");
            return res.redirect("/login");
        }
        req.login(user, (err)=>{
            if (err) return next(err);
            return res.redirect("/business");
        });
    })(req, res, next);
};
$e2b4f4f045669c0f$export$d96ee2e093b5a9f = function(req, res, next) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    if (!req.user) res.render("auth/register", {
        title: "Kam's Portfolio",
        page: "Register",
        logo: "img/logo.png",
        login: req.isAuthenticated(),
        username: req.body.username,
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : ""
    });
    else return res.render("/");
};
$e2b4f4f045669c0f$export$426c7c60c1e95651 = function(req, res, next) {
    // instantiate a user object
    let newUser = new $e2b4f4f045669c0f$var$User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });
    $e2b4f4f045669c0f$var$User.register(newUser, req.body.password, (err)=>{
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash("registerMessage", "Registration Error: User Already Exists.");
                console.log("err: exist user");
            }
            return res.render("auth/register", {
                title: "Kam's Portfolio",
                page: "Register",
                logo: "img/logo.png",
                login: req.isAuthenticated(),
                username: req.body.username,
                messages: req.flash("registerMessage"),
                displayName: req.user ? req.user.displayName : ""
            });
        } else //if no err, successfully register
        //redirect and authercate
        return $hXvsm$passport.authenticate("local")(req, res, ()=>{
            res.redirect("/business");
        });
    });
};
$e2b4f4f045669c0f$export$a95b4b6cfb36d7af = function(req, res, next) {
    req.logout((err)=>{
        if (err) return next(err);
    });
    res.redirect("/");
};

});

parcelRequire.register("59UH3", function(module, exports) {

$parcel$export(module.exports, "render", () => $3c19c5245ba3a274$export$b3890eb0ae9dca99, (v) => $3c19c5245ba3a274$export$b3890eb0ae9dca99 = v);
$parcel$export(module.exports, "renderEditPage", () => $3c19c5245ba3a274$export$e61f2c4e1fd6393c, (v) => $3c19c5245ba3a274$export$e61f2c4e1fd6393c = v);
$parcel$export(module.exports, "renderAddPage", () => $3c19c5245ba3a274$export$89c0aa89f7bd48d, (v) => $3c19c5245ba3a274$export$89c0aa89f7bd48d = v);
$parcel$export(module.exports, "edit", () => $3c19c5245ba3a274$export$e1a8e267487c59d1, (v) => $3c19c5245ba3a274$export$e1a8e267487c59d1 = v);
$parcel$export(module.exports, "delete", () => $3c19c5245ba3a274$export$1822828d790e23ee, (v) => $3c19c5245ba3a274$export$1822828d790e23ee = v);
$parcel$export(module.exports, "add", () => $3c19c5245ba3a274$export$e16d8520af44a096, (v) => $3c19c5245ba3a274$export$e16d8520af44a096 = v);
/*
COMP 229 Assignment 2 - business.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 16, 2022
*/ var $3c19c5245ba3a274$export$b3890eb0ae9dca99;
var $3c19c5245ba3a274$export$e61f2c4e1fd6393c;
var $3c19c5245ba3a274$export$89c0aa89f7bd48d;
var $3c19c5245ba3a274$export$e1a8e267487c59d1;
var $3c19c5245ba3a274$export$1822828d790e23ee;
var $3c19c5245ba3a274$export$e16d8520af44a096;

var $7vbJo = parcelRequire("7vbJo");
$3c19c5245ba3a274$export$b3890eb0ae9dca99 = function(req, res) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    //to render the business.ejs in views folder
    $7vbJo.find((err, contactList)=>{
        if (err) return console.error(err);
        else res.render("business", {
            title: "Kam's Portfolio",
            login: req.isAuthenticated(),
            page: "Business Contact List",
            logo: "img/logo.png",
            ContactList: contactList
        });
    }).sort({
        "name": 1
    });
};
$3c19c5245ba3a274$export$e61f2c4e1fd6393c = function(req, res, next) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    let id = req.params.id;
    $7vbJo.findById(id, (err, contactToEdit)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else res.render("business/edit", {
            title: "Kam's Portfolio",
            page: "Edit Contact List",
            login: req.isAuthenticated(),
            logo: "/img/logo.png",
            contact: contactToEdit
        });
    });
};
$3c19c5245ba3a274$export$89c0aa89f7bd48d = function(req, res, next) {
    if (req.session.lastVisit) console.log(req.session.lastVisit);
    req.session.lastVisit = new Date();
    let id = req.params.id;
    res.render("business/add", {
        title: "Kam's Portfolio",
        page: "Add Contact List",
        login: req.isAuthenticated(),
        logo: "/img/logo.png"
    });
};
$3c19c5245ba3a274$export$e1a8e267487c59d1 = function(req, res, next) {
    let id = req.params.id;
    let updateContact = $7vbJo({
        "_id": id,
        "name": req.body.name,
        "tel": req.body.tel,
        "email": req.body.email
    });
    $7vbJo.updateOne({
        _id: id
    }, updateContact, (err)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else res.redirect("/business");
    });
};
$3c19c5245ba3a274$export$1822828d790e23ee = function(req, res, next) {
    let id = req.params.id;
    $7vbJo.remove({
        _id: id
    }, (err)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else res.redirect("/business");
    });
};
$3c19c5245ba3a274$export$e16d8520af44a096 = function(req, res, next) {
    let newContact = $7vbJo({
        "name": req.body.name,
        "tel": req.body.tel,
        "email": req.body.email
    });
    $7vbJo.create(newContact, (err, Contact)=>{
        if (err) {
            console.log(err);
            res.end(err);
        } else // refresh the business page
        res.redirect("/business");
    });
};

});
parcelRequire.register("7vbJo", function(module, exports) {
/*
COMP 229 Assignment 2 - business.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/ 
var $5764873892ad74b0$var$contactListModel = $hXvsm$mongoose.Schema({
    name: String,
    tel: Number,
    email: String
}, {
    collection: "contactlist"
});
module.exports = $hXvsm$mongoose.model("Contact", $5764873892ad74b0$var$contactListModel);

});



/* 
COMP 229 Assignment 1 - server.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/ // process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var $23459606e90636c0$exports = {};
/* 
COMP 229 Assignment 1 - express.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/ var $945681227b27e4c6$exports = {};
/* 
COMP 229 Assignment 1 - development.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Date: October 2, 2022
*/ $945681227b27e4c6$exports = {
    sessionSecret: "developmentSessionSecret"
};








var $23459606e90636c0$require$defaultConfiguration = $2685e5b20c9f29f6$exports.defaultConfiguration;



// modules for authentication
let $23459606e90636c0$var$localStrategy = $hXvsm$passportlocal.Strategy;


var $f49e8db61c1611be$exports = {};
$f49e8db61c1611be$exports = {
    "URI": "mongodb+srv://karlischan:301232477@cluster0.sao7wnx.mongodb.net/test"
};


// point mongoose to the DB URI
$hXvsm$mongoose.connect($f49e8db61c1611be$exports.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let $23459606e90636c0$var$mongoDB = $hXvsm$mongoose.connection;
$23459606e90636c0$var$mongoDB.on("error", console.error.bind(console, "Connection Error:"));
$23459606e90636c0$var$mongoDB.once("open", ()=>{
    console.log("Connected to MongoDB...");
});


$23459606e90636c0$exports = function() {
    var app = $hXvsm$express();
    app.use($hXvsm$compression());
    app.use($hXvsm$bodyparser.urlencoded({
        extended: true
    }));
    app.use($hXvsm$bodyparser.json());
    app.use($hXvsm$methodoverride());
    //setup express session
    app.use($hXvsm$expresssession({
        saveUninitialized: false,
        resave: false,
        secret: $945681227b27e4c6$exports.sessionSecret
    }));
    //intialize flash
    app.use($hXvsm$connectflash());
    //intialize passport
    app.use($hXvsm$passport.initialize());
    app.use($hXvsm$passport.session());
    //passport user config
    //create a User Model Instance
    let userModel = (parcelRequire("bzGOp"));
    let User = userModel.User;
    //implement a user auth strategy
    $hXvsm$passport.use(User.createStrategy());
    //serialize and deserialize user information
    $hXvsm$passport.serializeUser(User.serializeUser());
    $hXvsm$passport.deserializeUser(User.deserializeUser());
    // set view path
    app.set("views", "./app/views");
    app.set("view engine", "ejs");
    app.use($hXvsm$express.static("./public"));
    (parcelRequire("hGCPw"))(app);
    return app;
};


var $2685e5b20c9f29f6$var$app = $23459606e90636c0$exports();
var $2685e5b20c9f29f6$var$host = "localhost";
var $2685e5b20c9f29f6$var$port = 5000;
$2685e5b20c9f29f6$var$app.listen($2685e5b20c9f29f6$var$port);
console.log(`Server running at http://${$2685e5b20c9f29f6$var$host}:${$2685e5b20c9f29f6$var$port}`);
module.exports = $2685e5b20c9f29f6$var$app;


//# sourceMappingURL=index.js.map
