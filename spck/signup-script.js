document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rewritePassword = document.getElementById("rewrite_password").value;

    if (
      name === "" ||
      age === "" ||
      email === "" ||
      password === "" ||
      rewritePassword === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
      alert("Name should only contain letters.");
      return;
    }

    if (age <= 0 || !Number.isInteger(Number(age))) {
      alert("Age should be a positive integer.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email format.");
      return;
    }

    if (password !== rewritePassword) {
      alert("Passwords do not match.");
      return;
    }

    var user = {
      name: name,
      age: age,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "home.html";
  });
function getdata() {
  var data = JSON.parse(localStorage.getItem(data));
  var show = document.getElementById("user");
  if (data) {
    show.innerHTML = `
<li> ten : ${data[0].ten}</li>
<li> email: ${data[0].email}</li>
<li> pass : ${data[0].mk}</li>
`;
  }
}
