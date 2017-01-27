var db = require("../models");
// var express = require('express')
// var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');

// Routes
// =============================================================
module.exports = function (app) {


    // GET route for getting all of the posts
    app.get("/api", function (req, res) {
        console.log("INSIDE");
        res.json({ message: "Welcome" });

    });

    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then((result) => {
            res.json(result);
        })
    });

    app.post("/api/authenticate", function (req, res) {
        console.log("AUTHENTICATE");
        db.User.findOne({
            name: req.body.name
        }).then(function success(user) {
            console.log(user)
            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            }

            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            }
            console.log("above yo momma" + user.dataValues.name + user.dataValues.password);
            console.log("above token" + user.dataValues);
            console.log(app.get('superSecret'));
            var token = jwt.sign(user.dataValues.name, app.get('superSecret'), {
                algorithm: 'HS256'
              
            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });

        }).then(function error(result) {
            console.log("ERROR");
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        });

        // app.use('/api', apiRoutes);
    });
}