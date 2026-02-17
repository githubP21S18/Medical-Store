function validateLogin() {
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;

  if (email === "" || password === "") {
    alert("Both fields are required");
    return false;
  }
  if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }
  return true;
}
