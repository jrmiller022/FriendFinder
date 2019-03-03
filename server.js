//Depencies.
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for server and and response from user requests.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen of port
app.listen(PORT, function () {
    console.log("listening on: http://localhost:" + PORT);
});

