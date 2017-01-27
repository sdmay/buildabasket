var db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.redirect("/complete")
    });

       app.get("/item", function (req, res) {

        
            // console.log(dbItem);
            res.render('items', { dbItem })
            // res.json(dbItem);
        
    });
      app.get("/build", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/build.html"));
    });

    app.get("/checkout", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/checkout.html"));
    });





}