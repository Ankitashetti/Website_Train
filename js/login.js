let captcha;

function showLogin() {
    const loginElement = document.getElementById("y-login");
    loginElement.style.display = "block";

    captcha = generateCaptcha();
    document.getElementById("generated-captcha").textContent = captcha;
}

function hideLogin() {
    const loginElement = document.getElementById("y-login");
    loginElement.style.display = "none";
}

function generateCaptcha() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

let attempts = 0;
const maxAttempts = 3;

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameField = document.getElementById("login-username");
    const passwordField = document.getElementById("login-password");
    const captchaInputField = document.getElementById("captcha-input");
    const messageField = document.getElementById("p");
    const messageField1 = document.getElementById("p2");
    const messageField2 = document.getElementById("p1");

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    const captchaInput = captchaInputField.value.trim();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    
    messageField.textContent = "";
    [usernameField, passwordField, captchaInputField].forEach((field) => {
        field.style.backgroundColor = "";
    });

    
    if (!username || !password) {
        // messageField.textContent = "Please fill in both username and password.";
        usernameField.value = "";
        passwordField.value = "";
        usernameField.style.borderBlockColor = "red";
        passwordField.style.borderBlockColor = "red";
        usernameField.focus();
        return;
    }

    
    if (captchaInput !== captcha) {
        messageField1.textContent = "Invalid captcha!";
        captchaInputField.value = "";
        captchaInputField.style.borderBlockColor = "red";
        captchaInputField.focus();
        return;
    }

    // Check stored credentials
    if (username !== storedUsername || password !== storedPassword) {
        attempts++;
        if (attempts >= maxAttempts) {
            messageField2.textContent = "Too many failed attempts. Please try again later.";
            document.getElementById("login-form").querySelector("input[type='submit']").disabled = true;
            return;
        } else {
            messageField.textContent = `Invalid username or password! Attempt ${attempts} of ${maxAttempts}.`;
            usernameField.value = "";
            passwordField.value = "";
            usernameField.style.backgroundColor = "red";
            passwordField.style.backgroundColor = "red";
            return;
        }
    }

    
    messageField.textContent = "Login successful!";
    messageField.style.color = "green";
    window.location.href = "dashboard.html"; 
});


function toggleList(listId, buttonId) {
    var list = document.getElementById(listId);
    var button = document.getElementById(buttonId);
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
        button.textContent = "▴";
    } else {
        list.style.display = "none";
        button.textContent = "▾";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var hiddenLists = document.getElementsByClassName("hidden");
    for (var i = 0; i < hiddenLists.length; i++) {
        hiddenLists[i].style.display = "none";
    }
});
