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

const INSERT_ETUDIANT = function (matricule, nom, prenom, grp, codeS) {
  var sql = `INSERT INTO Etudiant (Matricule, Nom, Prenom, Groupe, CodeS) VALUES (${matricule},'${nom}','${prenom}',${grp},'${codeS}')`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

const UPDATE_ETUDIANT = function (matricule, nom, prenom, grp, codeS) {
  var sql = `UPDATE Etudiant SET Nom = ${nom},Prenom = ${prenom},Groupe = ${grp},CodeS = ${codeS} WHERE Matricule = ${matricule}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
};

const DELETE_ETUDIANT = function (matricule) {
  var sql = `DELETE FROM Etudiant WHERE Matricule = ${matricule}`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
};

const SELECT_ETUDIANT = function (matricule) {
  var sql = `select * from Etudiant WHERE Matricule=${matricule}`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
};

module.exports = {
  INSERT_ETUDIANT,
  UPDATE_ETUDIANT,
  DELETE_ETUDIANT,
  SELECT_ETUDIANT,
};
