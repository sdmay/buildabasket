var db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/"), function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"))
    }

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/contact_page.html"));
    });
      app.get("/build", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/build.html"));
    });

    app.get("/checkout", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/checkout.html"));
    });





}