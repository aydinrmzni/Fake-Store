// Import functions from various components and models
import {initializeTabs} from './components/tabs.js';
import {initializeModals, toggleModal, addProductField} from './components/modals.js';
import {initializeForms} from './components/forms.js';
import {initializeCart} from './components/cartUI.js';
import {renderProducts} from './components/productsUI.js';
import {handleLogin} from './models/auth.js';
import {toggleDropDown} from './components/userLogin.js';

// Add an event listener to the document that runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the tabs component
  initializeTabs();

  // Initialize the modals component
  initializeModals();

  // Initialize the forms component
  initializeForms();

  // Initialize the cart UI component
  initializeCart();

  // Render the products UI component
  renderProducts();

  // Assign the toggleModal function to the global window object for accessibility
  window.toggleModal = toggleModal;

  // Assign the addProductField function to the global window object for accessibility
  window.addProductField = addProductField;
});
