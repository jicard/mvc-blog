async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#un-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#pw-signup").value.trim();
  }
  
  document
    .querySelector(".signup-dash")
    .addEventListener("submit", signupFormHandler);