var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/complete", function (req, res) {

        db.CompleteBasket.findAll({}).then(function (dbCompleteBasket) {
            // console.log(dbCompleteBasket);
            res.render('completebasket', {dbCompleteBasket});
            // res.json(dbCompleteBasket);
        });
    });

    app.get("/empty", function (req, res) {

        db.EmptyBasket.findAll({}).then(function (dbEmptyBasket) {
            // console.log(dbEmptyBasket);
            res.render('emptybasket', {dbEmptyBasket})
            // res.json(dbEmptyBasket);
        
        });
    });

    app.get("/item", function (req, res) {

        db.Item.findAll({}).then(function (dbItem) {
            // console.log(dbItem);
            res.render('items', {dbItem})
            // res.json(dbItem);
        });
    });

    app.get("/contact", function (req, res) {

                   // console.log(dbItem);
            res.render('contact')
            // res.json(dbItem);
       
    });

        app.get("/login", function (req, res) {

                   // console.log(dbItem);
            res.render('login')
            // res.json(dbItem);
       
    });

    app.get("/about", function (req, res) {

                   // console.log(dbItem);
            res.render('about')
            // res.json(dbItem);
       
    });

    app.get("/refund", function (req, res) {

                   // console.log(dbItem);
            res.render('refund')
            // res.json(dbItem);
       
    });

    app.get("/faq", function (req, res) {

                   // console.log(dbItem);
            res.render('faq')
            // res.json(dbItem);
       
    });

    app.get("/blog", function (req, res) {

                   // console.log(dbItem);
            res.render('blog')
            // res.json(dbItem);
       
    });


}