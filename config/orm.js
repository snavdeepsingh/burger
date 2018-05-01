var connection = require("./connection");

var ORM = {
    selectAll: function(cb){
        // var queryString = "SELECT * FROM ??"
        connection.query("SELECT * FROM burgers", function(err,data){
        if(err){
            console.log(err);
            // throw err;
        }
    
        console.log("orm");
        
        cb(data);
        // res.render("index", {burgers: data});
    })
    }
}

module.exports = ORM;



// function insertOne(){
//     console.log("inserted");
//     // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", function(err,data){
//     //     if(err){
//     //         console.log(err);
//     //         // return res.status(500).end();
//     //     }
    
//     //     console.log("inserted");
//     //     // res.json({ id: result.insertId });
//     //     // console.log({ id: result.insertId });
//     // })
//     };



// function updateOne(){
//     console.log("updated");
//     // connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", function(err,data){
//     //     if(err){
//     //         // console.log(err);
//     //         throw err;
//     //     } 
//     //     console.log("updated");
//     //     // res.status(200).end();
//     // })
//     };



//  selectAll();

// module.exports.selectAll = selectAll;
// module.exports.insertOne = insertOne;
// module.exports.updateOne = updateOne;