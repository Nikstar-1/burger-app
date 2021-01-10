const express = require("express");
const router = express.Router();
var burgers = require("../models/burger");

router.get("/", function(req, res) {
    res.redirect("/burgers");
})

router.get("/burgers", function(req, res){
    burgers.getAllBurgers(function(burgers){
      //  console.log(burgers)
        res.render("index", {burger_data: burgers})
    })
})
router.post("/burgers/createburger", function (req, res){
    console.log(req.body.burger_name)
    burgers.createBurger(function(result){
        console.log(result)
        res.redirect("/burgers")
    }, req.body.burger_name);
})

router.put("/burgers/devourburger/:id", function(req, res){
    console.log("Into the controller")
    burgers.updateBurger(function(result){
        res.sendStatus(200)
    }, req.params.id)
})



module.exports = router;
