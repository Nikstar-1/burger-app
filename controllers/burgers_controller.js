const express = require("express");
const router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
})


module.exports = router;
