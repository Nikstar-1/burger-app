const { query } = require("express");
const connection = require("../config/connection");

let orm = {
  selectAll(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },

  insertOne(cb, burger_name) { 
    var devouredStatus = false;
    var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burger_name}', ${devouredStatus})`;
    connection.query(queryString, function (error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  updateOne(cb, burger_id) {
    var queryString = `UPDATE burgers SET devoured = true WHERE id = ${burger_id}`;
    connection.query(queryString, function (error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
    
  
  },
};

module.exports = orm;
