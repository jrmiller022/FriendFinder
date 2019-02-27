//Depencies.
var express = require("express");
var app = express();

var PORT = 8080;



//listen of port
app.listen(PORT, function () {
    console.log("listening on: http://localhost:" + PORT);
});

