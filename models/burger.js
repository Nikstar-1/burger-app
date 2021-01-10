const orm = require("../config/orm.js");

var burger = {
    getAllBurgers: function(cb){
        orm.selectAll(function(result){
            cb(result)
        })
    },
    createBurger: function(cb, burger_name){
        console.log(burger_name)
        orm.insertOne(cb, burger_name)
    }
}










module.exports = burger;











