// Import the userLoggedIn function or variable from the auth.js module
import {userLoggedIn} from '../models/auth.js';

// Get the user icon element by its ID
const userIcon = document.getElementById('userIcon');

// Get the dropdown menu element by its ID
const accountDropDownMenu = document.getElementById('accountDropDownMenu');

// Check if the userIcon element exists
userIcon &&
  // Add an event listener to the user icon that listens for 'click' events
  userIcon.addEventListener('click', () => {
    // When the user icon is clicked, check if the user is logged in
    if (userLoggedIn) {
      // If the user is logged in, call the toggleDropDown function
      toggleDropDown();
    } else {
      // If the user is not logged in, redirect to the login page
      window.location.href = 'auth.html';
    }
  });

// Define the toggleDropDown function
export function toggleDropDown() {
  // Toggle the 'hidden' class on the dropdown menu element
  // This will show or hide the dropdown menu
  accountDropDownMenu.classList.toggle('hidden');
}
