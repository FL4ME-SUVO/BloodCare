// Selecting necessary DOM elements
const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");
const form = document.querySelector("form");  // Assuming you have a form element

// Variable to store generated captcha
let captchaText = null;

// Function to generate captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
  captchaText = changeString.join(" ");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
};

const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value = "";
  captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
  // Toggle submit button disabled state based on captcha input field
  if (captchaInputBox.value) {
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.add("disabled");
  }

  if (!captchaInputBox.value) message.classList.remove("active");
};

// Function to validate the entered captcha
const validateCaptcha = () => {
  // Remove spaces from the generated captcha text for validation
  const formattedCaptcha = captchaText.split(" ").join("");
  
  message.classList.add("active");

  // Check if the entered captcha text is correct or not
  if (captchaInputBox.value === formattedCaptcha) {
    message.innerText = "Entered captcha is correct";
    message.style.color = "#826afb";
    return true;
  } else {
    message.innerText = "Entered captcha is not correct";
    message.style.color = "#FF2525";
    return false;
  }
};

// Prevent form submission if captcha is incorrect
form.addEventListener("submit", (event) => {
  if (!validateCaptcha()) {
    event.preventDefault();  // Prevent the form from submitting if captcha is incorrect
  }
});

// Add event listeners for the refresh button, captchaInputBox, submit button
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", validateCaptcha);

// Generate a captcha when the page loads
generateCaptcha();
