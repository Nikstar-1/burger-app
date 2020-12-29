const mysql = require("mysql"); 


//const util = require("util"); 

const connection = mysql.createConnection({
    port: 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'development',
    database : 'burgers_db',
  });
   

  connection.connect(function(error){
    if (error) {
      console.log(eror)
      return;
    }
    console.log("Connected to db")
  });

  
    
 module.exports = connection; 