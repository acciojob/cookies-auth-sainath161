//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to delete a cookie by name
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you should validate the username and password (e.g., send a request to the server)

    // For demonstration purposes, let's assume the login is successful
    var loggedInUser = { username: username, password: password };

    // Store user information in a cookie
    setCookie("loggedInUser", JSON.stringify(loggedInUser), 7); // Cookie expires in 7 days

    alert("Login successful!");
});

// Check if the user is already logged in (when the page loads)
window.onload = function() {
    var loggedInUser = getCookie("loggedInUser");
    if (loggedInUser) {
        loggedInUser = JSON.parse(loggedInUser);
        alert("Welcome back, " + loggedInUser.username + "!");
    }
};
