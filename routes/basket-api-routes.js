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

    app.get("/drag", function (req, res) {
        var baskets;
        db.EmptyBasket.findAll({}).then(function (dbEmptyBasket) {
            baskets = dbEmptyBasket;
            //res.render('drag', {dbEmptyBasket})
        }).then(function(ItemForBasket){
                db.Item.findAll({}).then(function (dbItemForBasket){
                    res.render('drag', {items: dbItemForBasket, baskets: baskets})
                })

            })
            // res.json(dbEmptyBasket);

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
        app.get("/itemcheckout", function (req, res) {

        // console.log(dbItem);
        res.render('itemcheckout')
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


    app.post("/api/lessproduct", function (req, res, next) {
        db.CompleteBasket.findOne({
            where: { item_name: req.body.item_name.trim() }
                
        
           })  .then(function (completeBasket) {
      
                            if(!completeBasket){
                            console.log("NOT COMPLETE")
                            db.Item.findOne({
                        where: { item_name: req.body.item_name.trim() }
                                 }).then(function (itemBasket) {
                                console.log("IN IT to WIN IT")
                               itemBasket.quantity -= parseInt(req.body.quantity);
                                 itemBasket.save().then(function (dbBasketItem) {
                                res.json(dbBasketItem);
           
                                    })  
                            });
                            }

        else {   
                completeBasket.quantity -= parseInt(req.body.quantity);
                completeBasket.save().then(function (dbItem) {
                    // console.log("ALL DONE ALLEGEDLY")
                    // console.log(dbItem)
                    res.json(dbItem); 
                });
                    
                    // console.log(dbBasketItem)
                   
        }
           });


});
}
