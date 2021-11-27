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

const INSERT_MODULE = function (CodeM, LibelleM, coef, codeEns) {
  var sql = `INSERT INTO Module (CodeM, LibelleM, Coef, CodeEns) VALUES ('${CodeM}','${LibelleM}',${coef},${codeEns})`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

const UPDATE_MODULE = function (CodeM, LibelleM, coef, codeEns) {
  var sql = `UPDATE Module SET LibelleM = '${LibelleM}',coef = ${coef},codeEns = ${codeEns} WHERE CodeM = ${CodeM}`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
};

const DELETE_MODULE = function (CodeM) {
  var sql = `DELETE FROM Module WHERE CodeM = ${CodeM}`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of  records deleted: " + result.affectedRows);
  });
};

module.exports = { INSERT_MODULE, UPDATE_MODULE, DELETE_MODULE };
