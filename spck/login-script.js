document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var storedUser = localStorage.getItem("user");
  if (storedUser) {
    var user = JSON.parse(storedUser);
    if (user.email === email && user.password === password) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  } else {
    alert("User not found. Please sign up first.");
  }
});
