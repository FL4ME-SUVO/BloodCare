document.addEventListener("DOMContentLoaded", function () {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  // Modal References
  const errorPopup = document.getElementById("error-popup");
  const errorMessage = document.getElementById("error-message");
  const closePopupBtn = document.getElementById("close-popup");

  // Event listeners for Sign-In and Sign-Up
  sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
  });

  // Toggle password visibility function
  window.togglePassword = function (passwordFieldId, eyeIconId) {
      const passwordField = document.getElementById(passwordFieldId);
      const eyeIcon = document.getElementById(eyeIconId);

      if (passwordField.type === "password") {
          passwordField.type = "text";
          eyeIcon.classList.remove("fa-eye");
          eyeIcon.classList.add("fa-eye-slash");
      } else {
          passwordField.type = "password";
          eyeIcon.classList.remove("fa-eye-slash");
          eyeIcon.classList.add("fa-eye");
      }
  };

  // Password Input Elements
  const signupPassword = document.getElementById("signup-password");
  const confirmPassword = document.getElementById("confirm-password");

  // Handle password requirements visibility
  const passwordRequirements = document.querySelector(".password-requirements");

  signupPassword.addEventListener("focus", function () {
      passwordRequirements.classList.add("visible");
  });

  signupPassword.addEventListener("blur", function () {
      setTimeout(() => {
          passwordRequirements.classList.remove("visible");
      }, 200);
  });

  // Validate password input and criteria
  const criteriaLength = document.getElementById("length");
  const criteriaUppercase = document.getElementById("uppercase");
  const criteriaLowercase = document.getElementById("lowercase");
  const criteriaNumber = document.getElementById("number");
  const criteriaSpecial = document.getElementById("special");
  const criteriaNoSpaces = document.getElementById("noSpaces");
  const criteriaCommon = document.getElementById("common");
  const criteriaRepeat = document.getElementById("repeat");

  const commonPasswords = ["password123", "12345678", "qwerty", "letmein", "admin", "welcome"];

  signupPassword.addEventListener("input", function () {
      const value = signupPassword.value;

      criteriaLength.classList.toggle("valid", value.length >= 8);
      criteriaLength.classList.toggle("invalid", value.length < 8);

      criteriaUppercase.classList.toggle("valid", /[A-Z]/.test(value));
      criteriaUppercase.classList.toggle("invalid", !/[A-Z]/.test(value));

      criteriaLowercase.classList.toggle("valid", /[a-z]/.test(value));
      criteriaLowercase.classList.toggle("invalid", !/[a-z]/.test(value));

      criteriaNumber.classList.toggle("valid", /\d/.test(value));
      criteriaNumber.classList.toggle("invalid", !/\d/.test(value));

      criteriaSpecial.classList.toggle("valid", /[!@#$%^&*(),.?":{}|<>]/.test(value));
      criteriaSpecial.classList.toggle("invalid", !/[!@#$%^&*(),.?":{}|<>]/.test(value));

      criteriaNoSpaces.classList.toggle("valid", !/\s/.test(value));
      criteriaNoSpaces.classList.toggle("invalid", /\s/.test(value));

      criteriaCommon.classList.toggle("valid", !commonPasswords.includes(value));
      criteriaCommon.classList.toggle("invalid", commonPasswords.includes(value));

      criteriaRepeat.classList.toggle("valid", !/(.)\1{2,}/.test(value));
      criteriaRepeat.classList.toggle("invalid", /(.)\1{2,}/.test(value));
  });

  // Handle form submission for sign-up
  document.querySelector(".sign-up-form").addEventListener("submit", (e) => {
      if (signupPassword.value !== confirmPassword.value) {
          e.preventDefault(); // Prevent form submission
          showErrorPopup("Passwords do not match. Please try again.");
      }
  });

  // Show error popup
  function showErrorPopup(message) {
      errorMessage.textContent = message;
      errorPopup.classList.add("visible");
  }

  // Close popup
  closePopupBtn.addEventListener("click", () => {
      errorPopup.classList.remove("visible");
  });
});