import {getProduct} from '../services/api.js'; // Import the getProduct function from the API service
import {generateProductCardHTML} from '../utils/htmlGenerators.js'; // Import the HTML generator function

/**
 * Renders products on the page.
 */
export async function renderProducts() {
  const productGridElm = document.getElementById('productGrid'); // Get the product grid element
  let productCardHTML = ''; // Initialize the HTML string for product cards

  // Fetch and render products
  (await getProduct(0, 0)).forEach((product) => {
    productCardHTML += generateProductCardHTML(product); // Generate HTML for each product and append it to the string
  });
  productGridElm && (productGridElm.innerHTML = productCardHTML); // Set the inner HTML of the product grid element
}
