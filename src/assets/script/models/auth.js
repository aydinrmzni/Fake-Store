import {getData, postData} from '../utils/helpers.js';

// Get references to DOM elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginPasswordInput = document.getElementById('login-password');
const formMessageModal = document.getElementById('formMessageModal');
const formMessageText = document.getElementById('formMessageText');
const formMessageIcon = document.getElementById('formMessageIcon');
const userWelcome = document.getElementById('userWelcome');

// Retrieve the logged-in user from localStorage if it exists
export const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn')) || undefined;

// Remove whitespace from password input as user types
loginPasswordInput &&
  loginPasswordInput.addEventListener('input', function () {
    this.value = this.value.replace(/\s/g, '');
  });

// Handle form submission
loginForm &&
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    handleLogin();
  });

// Handle form submission
signupForm &&
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSignup();
  });

// Handle logout process
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('logout')) {
    handleLogout();
  }
});

// Function to handle the login process
export async function handleLogin() {
  try {
    // Fetch users from API
    const users = await getData('https://fakestoreapi.com/users');
    const formData = getFormData(loginForm); // Get form data
    const userMap = new Map();

    // Create a map of users with email as the key for quick lookup
    users.map((user) => userMap.set(user.email, user));

    // Check if the entered email exists in the user map
    const user = userMap.get(formData['login-email']);

    // Verify password and handle login
    if (user && user.password === formData['login-password']) {
      localStorage.setItem('userLoggedIn', JSON.stringify(user)); // Store user data in localStorage
      showFormMessage('Login was successful!', 'fa-circle-check', 'text-green-600'); // Show success message
      setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to main page after a delay
        showLoggedInUser();
      }, 3000);
    } else {
      localStorage.removeItem('userLoggedIn'); // Remove any existing user data from localStorage
      showFormMessage('Login was failed!', 'fa-circle-xmark', 'text-red-500'); // Show error message
    }
  } catch (error) {
    console.error('Failed to fetch users', error);
    showFormMessage('An error occurred. Please try again.', 'fa-circle-xmark', 'text-red-500'); // Show error message
  }
}

// Function to handle the signup process
async function handleSignup() {
  try {
    // Get the form data from the signup form
    const formData = getFormData(signupForm);

    // Construct the user data object to send in the POST request
    const userData = {
      // Email address from the form data
      email: formData['signup-email'],

      // Username is the first name from the form data
      username: formData['signup-fname'],

      // Password from the form data
      password: formData['signup-password'],

      // Name object containing the first and last name from the form data
      name: {
        firstname: formData['signup-fname'],
        lastname: formData['signup-lname'],
      },

      // Address object with placeholders for now (can be updated to include form data)
      address: {
        city: undefined, // Placeholder for city
        street: undefined, // Placeholder for street
        number: undefined, // Placeholder for number
        zipcode: undefined, // Placeholder for zipcode
        geolocation: {
          lat: undefined, // Placeholder for latitude
          long: undefined, // Placeholder for longitude
        },
      },

      // Placeholder for phone number
      phone: undefined,
    };

    // Send a POST request with the user data to the API endpoint
    const response = await postData('https://fakestoreapi.com/users', userData);

    // Show a success message to the user
    showFormMessage('Signup was successful!', 'fa-circle-check', 'text-green-600');
  } catch (error) {
    // Show an error message to the user if the POST request fails
    showFormMessage('An error occurred. Please try again.', 'fa-circle-xmark', 'text-red-500');

    // Log the error to the console
    console.error('Failed to send POST request to server', error);
  }
}

// Function to handle the logout process
function handleLogout() {
  localStorage.removeItem('userLoggedIn');
  window.location.reload();
}

// Function to extract form data into an object
export function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

// Function to display form messages
function showFormMessage(message, iconClass, textClass) {
  formMessageIcon.className = 'fa mr-3 text-2xl'; // Reset icon classes
  formMessageText.textContent = message; // Set the message text
  formMessageIcon.classList.add(iconClass, textClass); // Set new icon classes
  formMessageModal.classList.remove('hidden'); // Show the modal
}

// Function to show username if logged-in
function showLoggedInUser() {
  if (userLoggedIn) {
    userWelcome && userWelcome.classList.remove('hidden');
    userWelcome && (userWelcome.textContent = userLoggedIn.username);
  } else {
    userWelcome && userWelcome.classList.remove('hidden');
    userWelcome && (userWelcome.textContent = 'Login');
  }
}

// Function to lock the page if the user is not logged in
function lockPage() {
  // Get the current path of the page
  const currentPath = window.location.pathname;

  // Define the path to the authentication page
  const authPagePath = '/src/auth.html';

  // List of pages that should be locked if the user is not logged in
  const protectedPages = ['/src/checkout.html', '/src/account.html', '/src/cart.html'];

  // Check if the current path is in the list of protected pages and the user is not logged in
  if (protectedPages.includes(currentPath) && !userLoggedIn) {
    // If the user is not logged in, redirect to the login page
    window.location.href = 'auth.html';
  }

  // Check if the user is logged in and the current path is the authentication page
  if (userLoggedIn && authPagePath.includes(currentPath)) {
    // If the user is logged in and on the authentication page, redirect to the account page
    window.location.href = 'account.html';
  }
}

// Run the lockPage function when the script is loaded
lockPage();

// Run the showLoggedInUser function when the script is loaded
showLoggedInUser();
