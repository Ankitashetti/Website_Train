document.getElementById("registration-form").addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Get form fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Password and Confirm Password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Validate Password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
        return;
    }

    // Save to localStorage (This mimics a simple backend for the purpose of testing)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! You can now log in.");

    // Redirect to the login page (you can change this to the desired location)
    window.location.href = "index.html"; // Replace with your actual login page URL
});
