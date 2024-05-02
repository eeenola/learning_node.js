const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  // Check if the database exists
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    if (result.warningStatus === 0) {
      console.log("Database created");
    } else {
      console.log("Database already exists");
    }
  });
});
