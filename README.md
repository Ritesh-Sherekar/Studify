# Studify Course Selling Website

Welcome to StudyLab, a web-based course-selling platform. This project provides a seamless experience for users to register, log in, and explore various roles such as Admin, Student, and Coordinator. It includes responsive web pages and features role-based redirection.

---

## Features

1. **Homepage (index.html)**:
   - A dynamic landing page showcasing:
     - Highlights of courses offered.
     - The benefits of online learning.
     - A preloader for better user experience.
   - Navigation options to explore or register.

2. **Registration Page (Registration.html)**:
   - Allows new users to create an account by providing:
     - Full Name
     - Role (Admin, Student, Coordinator)
     - Email Address
     - Password (with confirmation)

3. **Login Page (Login.html)**:
   - Existing users can log in by entering:
     - Role
     - Email/Username
     - Password
   - Validates user credentials and redirects to role-specific dashboards:
     - Admin Dashboard
     - Student Dashboard
     - Coordinator Dashboard

4. **Contact Us Section**:
   - Provides users an easy way to send messages or inquiries via a form.

5. **Local Storage-Based Authentication**:
   - User data is stored and retrieved using localStorage, ensuring quick validation during login.

---

## How to Use

### Step 1: Setup
1. Clone or download the project repository.
2. Ensure the following files are in the root directory:
   - `index.html`
   - `Login.html`
   - `Registration.html`
   - `assets/` (CSS and JS files)
   - `vendor/` (Bootstrap files)

### Step 2: Open in Browser
1. Open `index.html` in your preferred browser.
2. Ensure all assets load correctly. If not, confirm that the folder structure matches the paths in the code.

### Step 3: Registration
1. Navigate to the **Register Now** button on the homepage or directly open `Registration.html`.
2. Fill out the registration form:
   - Full Name
   - Select Role (Admin, Student, or Coordinator)
   - Enter a valid email address.
   - Create a password and confirm it.
3. Submit the form. Upon successful registration:
   - Your credentials will be stored in the browser's localStorage.
   - You'll be redirected to the login page.

### Step 4: Login
1. Open `Login.html`.
2. Enter your registered email, password, and select the appropriate role.
3. Submit the form. If the credentials are valid:
   - Admin: Redirected to `Admin.html`.
   - Student: Redirected to `Student.html`.
   - Coordinator: Redirected to `Coordinator.html`.

### Step 5: Access Role-Specific Dashboards
1. After logging in, explore the functionalities specific to your role.
2. If logged out, you can log in again using the credentials created during registration.

### Step 6: Contact Us
1. Use the contact form on the homepage to send any inquiries or feedback.

---

## Project Structure

```plaintext
|-- index.html                (Homepage)
|-- Login.html                (Login Page)
|-- Registration.html         (Registration Page)
|-- assets/
    |-- css/
        |-- fontawesome.css   (Icons)
        |-- templatemo-scholar.css (Custom CSS)
        |-- animate.css       (Animations)
    |-- js/
        |-- custom.js         (Custom scripts)
        |-- owl-carousel.js   (Carousel script)
|-- vendor/
    |-- bootstrap/
        |-- css/             (Bootstrap CSS files)
        |-- js/              (Bootstrap JS files)

