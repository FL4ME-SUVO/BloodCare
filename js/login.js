const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function togglePassword(passwordFieldId, eyeIconId) {
  const passwordField = document.getElementById(passwordFieldId);
  const eyeIcon = document.getElementById(eyeIconId);

  // Toggle the password visibility
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("fa-eye"); // Change to open eye
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash"); // Change to closed eye
    eyeIcon.classList.add("fa-eye");
  }
}
//validation
function togglePassword(inputId, eyeIconId) {
  const input = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeIconId);
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    input.type = "password";
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}


