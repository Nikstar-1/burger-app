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
  updateOne() {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    orm.update("burgers", burger_name, devoured, function (res) {
      cb(result);
    });
  },
};

module.exports = orm;
