const connection = require("../config/connection");
/*Import (require) connection.js into orm.js


In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()



Export the ORM object in module.exports.

*/

let burgers = {
    selectAll()    {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
   
    insertOne() {
      orm.create("burgers", id, burger_name, devoured, function(res) {
        cb(res);
      });
    },
    updateOne() {
      orm.update("burgers", burger_name, devoured, function(res) {
        cb(res);
      });
    }
  };
  
  
  module.exports = orm;

