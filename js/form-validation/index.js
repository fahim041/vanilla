const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirmation");
const termInput = document.querySelector("#terms");
const errorContainers = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearError();

  if (username.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters");
  }
  if (password.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters");
  }

  if (password.value != passwordConfirm.value) {
    errorMessages.push("Passwords must match");
  }

  if (!termInput.checked) {
    errorMessages.push("User must accept the terms");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

function clearError() {
  errorList.innerHTML = "";
}

function showErrors(errorMessages) {
  errorMessages.forEach((e) => {
    const li = document.createElement("li");
    li.innerText = e;
    errorList.append(li);
  });
  errorContainers.classList.add("show");
}
