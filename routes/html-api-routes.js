var db = require("../models");
var path = require("path");

module.exports = function (app) {

    

    // app.get("/contact", function (req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/contact_page.html"));
    // });
      app.get("/build", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/build.html"));
    });

 





}