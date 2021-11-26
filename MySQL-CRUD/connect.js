//MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "&éza&éza",
  database: "TP_SI",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
