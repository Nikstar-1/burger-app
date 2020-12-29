const orm = require("../config/orm.js");

var burger = {
    getAllBurgers: function(cb){
        orm.selectAll(function(result){
            cb(result)
        })
    }
}










module.exports = burger;











