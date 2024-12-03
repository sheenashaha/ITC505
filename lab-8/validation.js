// Function to sanitize input to prevent XSS attacks
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;  // Set textContent, which automatically escapes HTML characters
    return div.innerHTML;     // Return the sanitized HTML-safe string
}

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

    // Get form field values
    const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
    const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const password = sanitizeInput(document.getElementById('password').value);
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value);

    // Validate first name
    if (firstName === '') {
        document.getElementById('errorFirstName').textContent = 'First name is required.';
        isValid = false;
    }

    // Validate last name
    if (lastName === '') {
        document.getElementById('errorLastName').textContent = 'Last name is required.';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('errorEmail').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('errorEmail').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('errorPassword').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('errorPassword').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        document.getElementById('errorConfirmPassword').textContent = 'Confirm your password.';
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('errorConfirmPassword').textContent = 'Passwords do not match.';
        isValid = false;
    }

    return isValid; // Prevent form submission if not valid
}
