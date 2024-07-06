// Import the userLoggedIn function or variable from the auth.js module
import {userLoggedIn} from '../models/auth.js';

// Get the user icon element by its ID
const userIcon = document.getElementById('userIcon');

// Get the account link element by its ID
const accountLinkElm = document.getElementById('accountLink');

// Get the admin link element by its ID
const adminLinkElm = document.getElementById('adminLink');

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
      // If the user was admin, show admin link and hide the account link
      if (userLoggedIn.username === 'jimmie_k') {
        adminLinkElm && adminLinkElm.classList.remove('hidden');
        accountLinkElm && accountLinkElm.classList.add('hidden');
        // If the user was customer, show account link and hide the admin link
      } else {
        adminLinkElm && adminLinkElm.classList.add('hidden');
        accountLinkElm && accountLinkElm.classList.remove('hidden');
      }
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
