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

const SELECT_ETUDIANT = function (matricule) {
  var sql = `select * from Etudiant WHERE Matricule=${matricule}`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result[0]['Nom']);
  });
};

SELECT_ETUDIANT(1245678901);
