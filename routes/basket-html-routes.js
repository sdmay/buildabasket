// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user +  " NO ONE LOGGED IN")
    if (req.user) {
      //res.redirect("/members");
      res.render('complete');
    }
    //res.sendFile(path.join(__dirname + "/../public/signup.html"));
    res.redirect("/login");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      //res.redirect("/members");
      res.render('members');
    }
    //res.sendFile(path.join(__dirname + "/../public/login.html"));
     res.render('login');
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    //res.sendFile(path.join(__dirname + "/../public/members.html"));
    res.render('members');
  });

};