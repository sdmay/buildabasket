var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require("../models");

module.exports = function (app) {


passport.use(new Strategy(
   
  function(username, password, cb) {
    //   console.log(username)
    db.User.findOne({
        where: {email : username   
        }
        }).then(function(user) {
      console.log(user.email+ "POOP");
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); };
      console.log(user + "LLLLLLLLLLLLLL");
      return cb(null, user);
      
    });
  }));

  passport.serializeUser(function(user, cb) {
      console.log("ASSSSSSS " + user.id)
  cb(null, user.id);
});

passport.deserializeUser(function(userid, cb) {
    console.log(userid + "BBBBBBBBBBBBBBBBBBBB")
  db.User.findOne({
      where: {id: userid}
  }).then(function(err, thisUser){
    //   console.log(user.toJSON());
    
      console.log(thisUser + " YYYYYYYYYYY")
      if (err) { return cb(err); }
    cb(null, thisUser);
  })
     

});

// app.get('/',
//   function(req, res) {
//     res.render('home', { user: req.user });
//   });

      app.get("/logintest", function (req, res) {
        res.render('logintest')
    });
  
app.post('/api/auth', 
  passport.authenticate('local', { failureRedirect: '/complete' }),
  function(req, res) {
    res.redirect('/profile');
  });
  
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });


}