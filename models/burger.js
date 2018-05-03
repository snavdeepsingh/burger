// Import the ORM to create functions that will interact with the database.
var orm = require("./../config/orm.js");



var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers",function (data) {

            // console.log("burger");
            cb(data);
            // console.log(data);
        })
    },

    addBurger: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (data) {


            cb(data);
            // console.log(data);
        })
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (data) {

            // console.log("burger");
            cb(data);
            // console.log(data);
        })
    }
};


// Export the database functions for the controller (burgers_Controller.js).

module.exports = burger;