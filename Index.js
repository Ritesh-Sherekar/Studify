// Temporary in-memory database
const userData = {
    "student1@example.com": { password: "student123", role: "Student" },
    "teacher1@example.com": { password: "teacher123", role: "Teacher" },
    "admin@example.com": { password: "admin123", role: "Admin" }
};

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Validate user credentials
    if (userData[email] && userData[email].password === password) {
        const role = userData[email].role;
        message.style.color = "green";
        message.textContent = `Login successful! Welcome, ${role}.`;
        // You can redirect or load role-specific content here
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password!";
    }
});