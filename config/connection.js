const mysql = require("mysql"); 
let connection;


  if (process.env.JAWSDB_URL){
    connection = sysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "development",
      database: "burger_db"
    })
  }
   
  
 connection.connect();
 module.exports = connection; 