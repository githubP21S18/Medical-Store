// Registration Validation
function validateRegister() {
  let name = document.forms["regForm"]["name"].value;
  let email = document.forms["regForm"]["email"].value;
  let password = document.forms["regForm"]["password"].value;

  if (name == "" || email == "" || password == "") {
    alert("All fields must be filled out");
    return false;
  }
  if (!email.includes("@")) {
    alert("Enter a valid email");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }
  return true;
}

// Login Validation
function validateLogin() {
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;

  if (email == "" || password == "") {
    alert("Both fields required");
    return false;
  }
  if (!email.includes("@")) {
    alert("Invalid email");
    return false;
  }
  return true;
}
