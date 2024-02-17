document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", login);
  document.getElementById("register-form").addEventListener("submit", register);
    getAllBlogs();
});

function getAllBlogs(){
    const authToken = localStorage.getItem('token');
    console.log(authToken)
    fetch("http://localhost:5000/blogs", {
      method: "GET",
      headers: {
        Authorization: "Bearer",
        authToken,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch blogs");
    }
    })
    .then((data) => {
    console.log(data);
    });
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Perform login API request
  // Example using fetch API
  fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Login failed");
      }
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem('token',data.token);
      document.getElementById("message").innerText = "Login successful!";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerText =
        "Login failed. Please try again.";
    });
}

function register(event) {
  event.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Perform register API request
  fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Registration failed");
      }
    })
    .then((data) => {
      
      document.getElementById("message").innerText = "Registration successful!";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerText =
        "Registration failed. Please try again.";
    });
}
