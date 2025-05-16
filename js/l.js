document.getElementById("login-form").addEventListener("submit", function (e) {
    // Prevent default form submission
    e.preventDefault();

    // Get entered username and password
    const enteredUsername = document.getElementById("login-username").value;
    const enteredPassword = document.getElementById("login-password").value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if the entered credentials match the stored ones
    if (enteredUsername !== storedUsername || enteredPassword !== storedPassword) {
        alert("Invalid username or password!");
        return;
    }

    alert("Login successful!");
    // Optionally, redirect to a different page after successful login
    window.location.href = "index.html"; 
});
