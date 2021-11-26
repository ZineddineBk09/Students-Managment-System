const SIGNINBTN = document.getElementById("signinBtn");
const USERNAME = document.getElementById("username");
const PASSWORD = document.getElementById("password");
const FORM = document.getElementById("form");

const logedInUser = { username: "", password: "" };

//Add users with privelege to access the app
const privilegeUsers = [
  { username: "directrice", password: "directrice123" },
  { username: "scolarite", password: "scolarite123" },
];

//count the times that user try to sign in
let countLogins = 1;

//configure the username and password fields
USERNAME.addEventListener("change", function () {
  //This input has changed
  logedInUser.username = USERNAME.value;
  console.log("username : ", USERNAME.value);
});

PASSWORD.addEventListener("change", function () {
  //This input has changed
  logedInUser.password = PASSWORD.value;
});

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
});

//configure the click event of the Sign In button
SIGNINBTN.addEventListener("click", () => {
  if (countLogins < 3) {
    //check if the directrice or the scolarity loged in
    if (
      (logedInUser.username === privilegeUsers[0].username &&
        logedInUser.password === privilegeUsers[0].password) ||
      (logedInUser.username === privilegeUsers[1].username &&
        logedInUser.password === privilegeUsers[1].password)
    ) {
      window.location.href = "/sections";
    } else {
      countLogins += 1;
      console.log(3 - countLogins, " times left");
      USERNAME.value = "";
      USERNAME.style.border = "1px solid red";
      PASSWORD.value = "";
      PASSWORD.style.border = "1px solid red";
    }
  } else {
    window.location.href = "./Error.html";
  }
});
