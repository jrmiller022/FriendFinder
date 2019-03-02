//Depencies.
var express = require("express");
var app = express();

var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for server and and response from user requests.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listen of port
app.listen(PORT, function () {
    console.log("listening on: http://localhost:" + PORT);
});

