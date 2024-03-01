function validateForm() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let flag = 1;

  if (username.value == "") {
    document.getElementById("userError").innerHTML = "Username Empty";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("userError").innerHTML =
      "Username must have 3 characters";
    flag = 0;
  } else {
    document.getElementById("userError").innerHTML = "";
  }

  if (password.value == "") {
    document.getElementById("passwordError").innerHTML = "Password Empty";
    flag = 0;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
