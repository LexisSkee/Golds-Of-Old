document.addEventListener("DOMContentLoaded", () => {
    // Sign-in form validation
    document.getElementById("signin-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
        } else {
            alert("Sign-in successful!");
        }
    });

    // Sign-up form validation
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const phone = document.getElementById("signup-phone").value;
        const password = document.getElementById("signup-password").value;
        
        if (username === "" || email === "" || phone === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Sign-up successful!");
        }
    });

    // Download button functionality
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Download started!");
        });
    });
});
