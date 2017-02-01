// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var jwt = require("jwt-simple");
var morgan = require('morgan');
var config = require('./config');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;





// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require('cookie-parser')());

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// app.set('superSecret', config.secret);
// app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
// Routes =============================================================


require("./routes/basket-api-routes.js")(app);
// require("./routes/web-token-api.js")(app);
// require("./routes/jwt-api-routes.js")(app);
require("./routes/passport-local-api.js")(app);


// var webtokenroutes = require("./routes/web-token-api.js");
// app.use("/", webtokenroutes);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



