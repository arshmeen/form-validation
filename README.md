Registration Form with Validation
This project is a simple registration form with client-side validation implemented using HTML, CSS, and JavaScript. The form validates the user's input for first name, last name, email, and password before allowing submission.

Table of Contents
Demo
Features
Installation
Usage
File Structure
Technologies Used
License
Demo
You can view a live demo of this form here.

Features
Real-time validation for first name, last name, email, and password fields.
Error messages are shown for invalid inputs.
Password visibility toggle.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/arshmeen/form-validation.git
Navigate to the project directory:
bash
Copy code
cd form-validation
Usage
Open index.html in your preferred web browser to see the form.
Fill in the form fields.
Click the "Create Account" button to validate and submit the form.
File Structure
css
Copy code
form-validation/
├── index.html
├── style.css
└── index.js
index.html
This file contains the structure of the registration form.

style.css
This file contains the styling for the registration form.

index.js
This file contains the JavaScript code for form validation and handling user interactions.

Technologies Used
HTML
CSS
JavaScript
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Detailed Explanation of Code
HTML (index.html)
Defines the structure of the registration form with fields for first name, last name, email, and password.
Includes placeholders and data attributes for validation.
Links to the external stylesheet (style.css) and JavaScript file (index.js).
CSS (style.css)
Provides styling for the form elements to ensure a clean and responsive design.
Includes error message styling to indicate invalid input fields.
JavaScript (index.js)
Adds event listeners for form input fields and the submit button.
Validates inputs using regular expressions:
Name fields: Must contain only alphabets.
Email field: Must follow a valid email format.
Password field: Must meet criteria for length, character types, and inclusion of special characters.
Displays appropriate error messages and handles password visibility toggle.
