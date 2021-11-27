const express = require("express");
const app = express();
//const popup = require("node-popup");
const PORT = 4000;

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

//connect to MySQL
require("./MySQL-CRUD/connect");

//MYSQL functions
const {
  INSERT_ETUDIANT,
  UPDATE_ETUDIANT,
  DELETE_ETUDIANT,
  SELECT_ETUDIANT,
} = require("./MySQL-CRUD/Etudiant");

//MYSQL functions
const {
  INSERT_MODULE,
  UPDATE_MODULE,
  DELETE_MODULE,
} = require("./MySQL-CRUD/Module");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/sections", function (req, res) {
  res.render("index2");
});

//---------STUDENTS-------------

app.get("/sections/students", function (req, res) {
  res.render("students");
});

app.get("/sections/students/Add-student", function (req, res) {
  res.render("Add-student");
});

app.post("/sections/students/Add-student", function (req, res) {
  console.log("New Student : ", req.body);
  try {
    INSERT_ETUDIANT(
      req.body.matricule,
      (req.body.nom || null),
      (req.body.prenom || null),
      (req.body.groupe || null),
      (req.body.section || null)
    );
  } catch (error) {
    console.log("SQL INSERTION ERROR : ", error.sqlMessage);
  }
});

app.get("/sections/students/Update-student", function (req, res) {
  res.render("Update-student");
});

app.post("/sections/students/Update-student", function (req, res) {
  console.log("New Student : ", req.body);
  try {
    UPDATE_ETUDIANT(
      req.body.matricule,
      (req.body.nom || null),
      (req.body.prenom || null),
      (req.body.groupe || null),
      (req.body.section || null)
    );
  } catch (error) {
    console.log(error);
  }
});

app.get("/sections/students/Delete-student", function (req, res) {
  res.render("Delete-student");
});

app.post("/sections/students/Delete-student", function (req, res) {
  console.log("New Student : ", req.body);
  try {
    DELETE_ETUDIANT(req.body.matricule);
  } catch (error) {
    console.log("SQL INSERTION ERROR");
  }
});

// ---------MODULES-----------

app.get("/sections/modules", function (req, res) {
  //popup.alert("Hello World!");
  res.render("modules");
});

app.get("/sections/modules/Add-module", function (req, res) {
  res.render("Add-module");
});

app.post("/sections/modules/Add-module", function (req, res) {
  console.log("New Student : ", req.body);
  try {
    INSERT_MODULE(
      parseInt(req.body.codeM),
      (req.body.libelle || null),
      (req.body.coef || null),
      (req.body.teacher || null)
    );
  } catch (error) {
    console.log("SQL INSERTION ERROR");
  }
});

app.get("/sections/modules/Update-module", function (req, res) {
  res.render("Update-module");
});

app.post("/sections/modules/Update-module", function (req, res) {
  console.log("New Student : ", req.body);
  try {
    UPDATE_MODULE(
      parseInt(req.body.codeM),
      (req.body.libelle || null),
      (req.body.coef || null),
      (req.body.teacher || null)
    );
  } catch (error) {
    console.log(error);
  }
});

app.get("/sections/modules/Delete-module", function (req, res) {
  res.render("Delete-module");
});

app.post("/sections/modules/Delete-module", function (req, res) {
  console.log("New Student : ", req.body);
  try {
    DELETE_MODULE(parseInt(req.body.codeM));
  } catch (error) {
    console.log("SQL INSERTION ERROR");
  }
});

app.get("/:id", function (req, res) {
  res.render("Error");
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));

//modules : https://static.toiimg.com/photo/80507427.cms
//students : https://images.theconversation.com/files/415311/original/file-20210809-25-149neyb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop
