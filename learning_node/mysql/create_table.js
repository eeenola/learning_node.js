const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  // Check if the table exists
  con.query("SELECT 1 FROM customers LIMIT 1", function (err, result) {
    if (err && err.code === 'ER_NO_SUCH_TABLE') {
      // Table does not exist, create it
      var createTableSql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
      con.query(createTableSql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    } else if (err) {
      // Other error occurred, throw it
      throw err;
    } else {
      // Table already exists
      console.log("Table already exists");
    }
  });
});
