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
    },
    updateBurger: function(cb, burger_id){
        console.log(burger_id); 
        orm.updateOne(cb, burger_id)
    }
}










module.exports = burger;











