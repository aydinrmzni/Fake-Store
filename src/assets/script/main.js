import {initializeTabs} from './components/tabs.js';
import {initializeModals, toggleModal, addProductField} from './components/modals.js';
import {initializeForms} from './components/forms.js';
import {initializeCart} from './components/cartUI.js';
import {renderProducts} from './components/productsUI.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeTabs();
  initializeModals();
  initializeForms();
  initializeCart();
  renderProducts();

  window.toggleModal = toggleModal;
  window.addProductField = addProductField;
});
