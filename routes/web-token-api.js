var db = require("../models");
var express = require('express');
var app = express();
var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');

// Routes
// =============================================================
module.exports = function (app) {


    // GET route for getting all of the posts
    apiRoutes.get("/", function (req, res) {
        console.log("INSIDE");
        res.json({ message: "Welcome" });

    });



    apiRoutes.post("/authenticate", function (req, res) {
        console.log("INSIDE AUTHENTICATE");
        db.User.findOne({
            email: req.body.email
        }).then(function success(user) {
            console.log(user)
            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            }

            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            }
            console.log("above yo momma" + user.dataValues.email + user.dataValues.password);
            console.log("above token" + user.dataValues);
            console.log(app.get('superSecret'));
            var token = jwt.sign(user.dataValues.email, app.get('superSecret'), {
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

    apiRoutes.use(function (req, res, next) {
        console.log("MIDDLEWARE")
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    });
    
    apiRoutes.post("/create", function (req, res) {
        console.log("INSIDE CREATE");
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function success(result) {
            res.json(result);
        });
    });

    apiRoutes.get("/users", function (req, res) {
        console.log("INSIDE USERS");
        db.User.findAll({}).then((result) => {
            res.json(result);
        })
    });
}

app.use('/api', apiRoutes);

// eyJhbGciOiJIUzI1NiJ9.VG9t.lsIvGkitNhC2MIfCPPF_95UzaA_p3NCYPRZhelbRtC4