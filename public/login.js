async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#pw-login").value.trim();
  
    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => document.location.replace("/"));
  }
  
  document.querySelector("#login-dashboard").addEventListener("submit", loginFormHandler);