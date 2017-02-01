var db = require("../models");
var jwt = require('jsonwebtoken');

module.exports = function (app) {
var newUser = function (req, res){
  db.User.findOne({where:{ email: req.body.emailID }})
    .then(function (user) {
      if(!user){
        db.User.create({ 
          email: req.body.emailID, 
          password: req.body.passwordID
        })
        .then(function(user){
            console.log(user)
              var myToken = jwt.sign({ user: user.id },
                                      'secret',
                                     { expiresIn: 24 * 60 * 60 });
                                     console.log(myToken)
              res.send(200, {'jwt': myToken,
                             'userId':    user.id,
                             'email': user.emailID });
        });
      } else {
        res.status(404).json('Username already exist!');
      }
    })
    .catch(function (err) {
      res.send('Error creating user: ', err.message);
    });
};

var authorize = function(req, res, next) {
 var token = req.body.token || req.headers["x-access-token"];
  if (token) {
   jwt.verify(token, 'secret', function(err, decoded) {
      if (err) {
         console.error("JWT Verification Error", err);
         return res.status(403).send(err);
      } else {
         req.decoded = decoded;
         return next();
      }
   });
  } else {
   res.status(403).send("Token not provided");
   }
}

}