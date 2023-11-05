const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const password_error = document.getElementById("password_error");
const registerButton = document.getElementById("registerButton");

function validateForm() {
  if (
    username.checkValidity() &&
    password.checkValidity() &&
    confirm_password.checkValidity() &&
    password.value === confirm_password.value
  ) {
    registerButton.disabled = false;
  } else {
    registerButton.disabled = true;
  }
}

confirm_password.addEventListener("input", () => {
  if (password.value !== confirm_password.value) {
    password_error.textContent = "Passwords do not match";
  } else {
    password_error.textContent = "";
  }
  validateForm();
});

registerButton.addEventListener("click", () => {
  if (password.value === confirm_password.value) {
    alert("Registration successful!");
  } else {
    alert("Passwords do not match. Please check your input.");
  }
});
