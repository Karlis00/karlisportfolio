function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

module.exports = function(app) {
    var index = require('../controllers/index.server.controller'),
    aboutMe = require('../controllers/aboutMe.server.controller'),
    projects = require('../controllers/projects.server.controller'),
    services = require('../controllers/services.server.controller'),
    contact = require('../controllers/contact.server.controller'),
    user = require('../controllers/user.server.controller'),
    business = require('../controllers/business.server.controller')
    app.get('/', index.render);
    app.get('/aboutMe', aboutMe.render);
    app.get('/projects', projects.render);
    app.get('/services', services.render);
    app.get('/contact', contact.render);
    app.get('/login', user.loginRender);
    app.post('/login', user.loginProcess);
    app.get('/register', user.registerRender);
    app.post('/register', user.registerProcess);
    app.get('/logout', user.logoutProcess);
    app.get('/business',requireAuth, business.render);
    app.get('/business/edit/:id',requireAuth, business.renderEditPage);
    app.post('/business/edit/:id',requireAuth, business.edit);
    app.get('/business/delete/:id',requireAuth, business.delete);

    };