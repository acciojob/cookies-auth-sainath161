// Check if user is already logged in
window.onload = function () {
    if (document.cookie.includes("loggedIn=true")) {
        // If logged in, redirect to dashboard
        window.location.href = "dashboard.html";
    }
}

// Function to set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Simulated authentication
    if (username === "user" && password === "password") {
        // Set cookie to indicate user is logged in
        setCookie("loggedIn", "true", 1); // Cookie expires in 1 day
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
