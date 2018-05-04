var express = require("express");
var burger = require("./../models/burger.js");

var app = express();

module.exports = function (app) {

    app.get("/", function (req, res) {
        burger.selectAll(function (data) {
            var hbsObject = {
                burgers: data
            };

            console.log(hbsObject);
            res.render("index", hbsObject);
            console.log("controller");
            // console.log(data);
            // res.send("test");
        });

    });

    app.post("/burgers", function (req, res) {
        burger.addBurger([
            'burger_name'
        ], [
            req.body.burger_name
        ], function (data) {
            // send back the ID of the new quote
            res.json({ id: res.insertId });
            // res.redirect("/");
        })
    });


    app.put("/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.updateOne({
            devoured: req.body.devoured
        }, condition, function (data) {
            if (res.changedRows == 0) {
                // if no rows were changed, then ID must nor exist, so 404
                return res.status(404).end();
            } else {
                // res.direct("/");
                res.status(200).end();
            }
        })
    });

}







// console.log(burger.selectAll());