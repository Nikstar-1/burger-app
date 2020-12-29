const express = require("express");
const router = express.Router();
var burgers = require("../models/burger");

router.get("/", function(req, res) {
    res.redirect("/burgers");
})

router.get("/burgers", function(req, res){
    burgers.getAllBurgers(function(burgers){
        console.log(burgers)
        res.render("index", {burger_data: burgers})
    })
})



module.exports = router;
