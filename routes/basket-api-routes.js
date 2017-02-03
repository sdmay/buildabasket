var db = require("../models");

module.exports = function (app) {

    app.get("/red", function (req, res) {
        res.redirect("/complete")
    });

    app.get("/complete", function (req, res) {
        db.CompleteBasket.findAll({}).then(function (dbCompleteBasket) {
            res.render('completebasket', { dbCompleteBasket });
        });
    });

    app.get("/drag", function (req, res) {
        var baskets;
        db.EmptyBasket.findAll({}).then(function (dbEmptyBasket) {
            baskets = dbEmptyBasket;
        }).then(function (ItemForBasket) {
            db.Item.findAll({}).then(function (dbItemForBasket) {
                res.render('drag', { items: dbItemForBasket, baskets: baskets })
            })
        })
    });

    app.get("/item", function (req, res) {
        db.Item.findAll({}).then(function (dbItem) {
            res.render('items', { dbItem })
        });
    });

    app.get("/contact", function (req, res) {
        res.render('contact')
    });
    app.get("/itemcheckout", function (req, res) {
        res.render('itemcheckout')
    });

    app.get("/about", function (req, res) {
        res.render('about')
    });

    app.get("/refund", function (req, res) {
        res.render('refund')
    });

    app.get("/faq", function (req, res) {
        console.log("Blogit")
        db.Faq.findAll({}).then(function (dbFaqs) {
            console.log("ASASASA " + dbFaqs)
            res.render('faq', { dbFaqs })
        });
        
    });
   
    // app.get("/login", function (req, res) {
    //     res.render('login')
    // });

   app.get("/blog", function (req, res) {
       console.log("Blogit")
        db.Blogs.findAll({}).then(function (dbBlogs) {
            console.log("ASASASA " + dbBlogs)
            res.render('blog', { dbBlogs })
        });
        
    });

    app.get("/checkout", function (req, res) {
        res.render('checkout')
    });

    app.post("/api/lessproduct", function (req, res, next) {
        db.CompleteBasket.findOne({
            where: { item_name: req.body.item_name.trim() }
        }).then(function (completeBasket) {

            if (!completeBasket) {

                db.Item.findOne({
                    where: { item_name: req.body.item_name.trim() }
                }).then(function (itemBasket) {

                    itemBasket.quantity -= parseInt(req.body.quantity);
                    itemBasket.save().then(function (dbBasketItem) {
                        res.json(dbBasketItem);

                    })
                });
            }

            else {
                completeBasket.quantity -= parseInt(req.body.quantity);
                completeBasket.save().then(function (dbItem) {
                    res.json(dbItem);
                });

            }
        });


    });
}
