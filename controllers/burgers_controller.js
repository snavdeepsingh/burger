var express = require("express");
var burger = require("./../models/burger.js");

var app = express();

module.exports = function(app){
    
    app.get("/", function(req, res){
        burger.selectAll(function(data){
           
            res.render("index", { burgers: data });
            console.log("controller");
            // console.log(data);
            // res.send("test");
        })
        
    });
}



// app.post("/burgers", function(req, res){
   
// });


// app.put("/burgers/:id", function(req, res){
    
// });
// console.log(burger.selectAll());