var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/complete", function (req, res) {

        db.CompleteBasket.findAll({}).then(function (dbCompleteBasket) {
            // console.log(dbCompleteBasket);
            res.render('completebasket', { dbCompleteBasket });
            // res.json(dbCompleteBasket);
        });
    });

// removed path for emptyBasket.handlebars, moving contents to /item as scroll

    app.get("/item", function (req, res) {

        db.Item.findAll({}).then(function (dbItem) {
            // console.log(dbItem);
            res.render('items', { dbItem })
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

    app.get("/checkout", function (req, res) {

        // console.log(dbItem);
        res.render('checkout')
        // res.json(dbItem);

    });

    // app.post("/api/create", function (req, res) {
    //     db.User.create({
    //         email: req.body.email,
    //         password: req.body.password
    //     }).then(function (dbUser) {
    //         res.json(dbUser);
    //     });
    // });

    app.post("/api/neworder", function (req, res) {
        console.log(req.body)
        db.Order.create({
            
            order: req.body.item_name,
            totalcost: req.body.total,
            UserId: req.body.userId
             
        }).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });

    app.post("/api/lessproduct", function (req, res) {
        // console.log(req.body)
        // console.log(req.body.quantity)
        // console.log(req.body.item_name)
        db.CompleteBasket.findOne({
            where: { basket_name: req.body.item_name.trim() }
        })
            .then(function (completeBasket) {
                completeBasket.quantity -= parseInt(req.body.quantity);
                completeBasket.save().then(function (dbItem) {
                    console.log("ALL DONE ALLEGEDLY")
                    console.log(dbItem)
                    res.json(dbItem);

                });
            });
    });

    app.post("/api/subtractitem", function (req, res) {
        console.log(req.body)
        db.Item.findOne({
            where: { item_name: req.body.item_name.trim() }
        })
        .then(function (item) {
            console.log("IN IT to WIN IT")
            console.log(item);
            console.log(item.quantity);
                item.quantity -= parseInt(req.body.quantity);
                 item.save().then(function (dbBasketItem) {
                    
                    console.log(dbBasketItem)
                    res.json(dbBasketItem);
        });
    
        });
    });
}