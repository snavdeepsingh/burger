var orm = require("./../config/orm.js");

    // orm.selectAll();
    // orm.insertOne();
    // orm.updateOne();
    
var burger = {
    selectAll: function(cb){
        orm.selectAll(function(data){
          
            // console.log("burger");
            cb(data);
            // console.log(data);
    })
    },

    // addBurger: function(cb){
    //     orm.insertOne(function(data){
          
            
    //         cb(data);
    //         // console.log(data);
    // })
    // },

    // updateOne: function(cb){
    //     orm.updateOne(function(data){
          
    //         // console.log("burger");
    //         cb(data);
    //         // console.log(data);
    // })
    },
    // devourBurger: orm.updateOne()
};


//  burger.selectAll();

module.exports = burger;