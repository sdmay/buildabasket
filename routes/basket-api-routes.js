var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/complete", function (req, res) {

        db.CompleteBasket.findAll({}).then(function (dbCompleteBasket) {
            console.log(dbCompleteBasket);
            res.json(dbCompleteBasket);
        });
    });

    app.get("/empty", function (req, res) {

        db.EmptyBasket.findAll({}).then(function (dbEmptyBasket) {
            console.log(dbEmptyBasket);
            res.json(dbEmptyBasket);
        });
    });

    app.get("/item", function (req, res) {

        db.Item.findAll({}).then(function (dbItem) {
            console.log(dbItem);
            res.json(dbItem);
        });
    });


}