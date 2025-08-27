const form = document.getElementById("signupForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

function validatePasswords() {
  if (confirmPasswordInput.value && confirmPasswordInput.value !== passwordInput.value) {
    passwordError.textContent = "Passwords do not match";
    passwordError.style.display = "block";
    confirmPasswordInput.setCustomValidity("Passwords do not match");
  } else {
    passwordError.textContent = "";
    passwordError.style.display = "none";
    confirmPasswordInput.setCustomValidity("");
  }
}

passwordInput.addEventListener("input", validatePasswords);
confirmPasswordInput.addEventListener("input", validatePasswords);

form.addEventListener("submit", function(event) {
  if (confirmPasswordInput.value !== passwordInput.value) {
    event.preventDefault();
  }
});
