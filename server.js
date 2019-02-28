var express = require("express"); 

var bodyParser = require("body-parser");

var methodOverride = require("method-override"); 

var PORT = process.env.PORT || 8080; 

var app = express(); 

// Serve static content for the app from the "public" directory in the application directory. //

app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"))

// Parse application/json 

app.use(bodyParser.json()); 

// Set Handlebars // 

var exphbs = require("express-handlebars"); 

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 

app.set("view engine", "handlebars"); 

// Import routes and give the serve access to them // 

var routes = require("./controllers/burgers_controller.js");

app.use(routes); 

// Start the server so it begin to listen to client requests // 

app.listen(PORT, function() {

    // Log when the server has started //

    console.log("The server is listening on: http://localhost " + PORT);

});