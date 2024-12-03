function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

    // Get form field values
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Sanitize inputs to prevent XSS
    firstName = sanitizeInput(firstName);
    lastName = sanitizeInput(lastName);
    email = sanitizeInput(email);
    password = sanitizeInput(password);
    confirmPassword = sanitizeInput(confirmPassword);

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

    // If the form is valid, show the submitted details in an alert
    if (isValid) {
        alert(`Submission Details:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
    }

    return isValid; // Prevent form submission if not valid
}

// Function to sanitize input by escaping special characters (XSS & SQLi prevention)
function sanitizeInput(input) {
    if (input) {
        // Replace <, >, &, ', and " with HTML entities to prevent XSS
        input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                     .replace(/&/g, "&amp;").replace(/'/g, "&#x27;")
                     .replace(/"/g, "&quot;");
    }
    return input;
}

