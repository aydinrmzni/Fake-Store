import {initializeTabs} from './components/tabs.js';
import {initializeModals, toggleModal, addProductField} from './components/modals.js';
import {initializeForms} from './components/forms.js';
import {initializeCart} from './components/cartUI.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeTabs();
  initializeModals();
  initializeForms();
  initializeCart();

  window.toggleModal = toggleModal;
  window.addProductField = addProductField;
});
