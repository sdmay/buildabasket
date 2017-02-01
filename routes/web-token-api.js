var db = require("../models");
var express = require("express");
var router = express.Router();
var app = express();
var jwt = require("jsonwebtoken");

// router
// =============================================================
module.exports = function (app) {


    // GET route for getting all of the posts
    router.get("/", function (req, res) {
        console.log("INSIDE");
        res.json({ message: "Welcome" });

    });



    router.post("/api/authenticate", function (req, res) {
        console.log("INSIDE AUTHENTICATE");
        db.User.findOne({
            email: req.body.emailID
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
            // var token = jwt.sign(user.dataValues.email, app.get('superSecret'), {
            //     algorithm: 'HS256'
            // });
            var token = jwt.sign(user.dataValues.email, 'basket', {
                algorithm: 'HS256'
            });


            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });

        });

        // app.use('/api', apirouter);
    });

    router.use(function (req, res, next) {
        console.log("MIDDLEWARE")
        if (req.path == "/api/authenticate") { next(); return; }
        // if ( req.method != "GET" ) { return false; }

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other router
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
    
    router.post("/create", function (req, res) {
        console.log("INSIDE CREATE");
        db.User.create({
            email: req.body.emailID,
            password: req.body.passwordID
        }).then(function success(result) {
            res.json(result);
        });
    });

    router.get("/users", function (req, res) {
        console.log("INSIDE USERS");
        db.User.findAll({}).then((result) => {
            res.json(result);
        })
    });
}
// module.exports = router;
//app.use('/api', router);

// eyJhbGciOiJIUzI1NiJ9.VG9t.lsIvGkitNhC2MIfCPPF_95UzaA_p3NCYPRZhelbRtC4