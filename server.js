var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// =========================================
// Router

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond to users.

require("./controllers/burgers_controller.js")(app);
// var connection = require("./config/connection");
// // Starts the server to begin listening
// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       res.render("index", { burgers: data });
//     });
//   });

// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  