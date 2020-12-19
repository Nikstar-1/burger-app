const express = require ("express");
const bodyParser = require("body-parser");
//const exphbs = require("express-handlebars");


const app = express();

var PORT = process.env.PORT || 3306;

app.listen(PORT), function(){
    console.log("server listening on: http://localhost:" + PORT)
}