const express = require("express");
const exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
  console.log("server listening on: http://localhost:" + PORT);
});
