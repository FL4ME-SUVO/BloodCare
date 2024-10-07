document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.querySelector(".refresh_button");
  const captchaBox = document.querySelector(".captch_box input");
  const captchaInput = document.querySelector(".captch_input input");
  const message = document.querySelector(".message");
  const submitButton = document.querySelector(".submit_button");

  let captchaText = "";

  // Function to generate random captcha
  function generateCaptcha() {
    const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = 6; // Define captcha length
    let captcha = "";
    for (let i = 0; i < length; i++) {
      const randomChar = charsArray[Math.floor(Math.random() * charsArray.length)];
      captcha += randomChar;
    }
    captchaBox.value = captcha;
    captchaText = captcha; // Store captcha value
  }

  // Call the function to display captcha on page load
  generateCaptcha();

  // Refresh captcha when clicking refresh button
  refreshButton.addEventListener("click", function (event) {
    event.preventDefault();
    generateCaptcha();
    message.textContent = ""; // Clear the message on refresh
    message.style.color = "transparent"; // Hide the message initially
    captchaInput.value = ""; // Clear the captcha input
    submitButton.disabled = true; // Disable the submit button again
    submitButton.classList.add("disabled");
  });

  // Handle form submission
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    if (captchaInput.value.trim() === captchaText) {
      message.textContent = "Entered captcha is correct";
      message.style.color = "green";

      // Redirect to index.html after a short delay
      setTimeout(function () {
        window.location.href = "index.html"; // Redirect to index.html
      }, 1000); // 1 second delay to display the success message
    } else {
      message.textContent = "Entered captcha is incorrect";
      message.style.color = "red";
    }
  });

  // Enable the submit button when captcha input matches the captcha text
  captchaInput.addEventListener("input", function () {
    if (captchaInput.value.trim() === captchaText) {
      submitButton.disabled = false;
      submitButton.classList.remove("disabled");
    } else {
      submitButton.disabled = true;
      submitButton.classList.add("disabled");
    }
  });
});
