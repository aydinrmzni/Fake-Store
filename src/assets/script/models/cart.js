// Importing necessary functions and variables from other modules
import {getData} from '../utils/helpers.js';
import {userLoggedIn} from '../models/auth.js';
import {generateCartCardHTML, generateTableCartHTML} from '../utils/htmlGenerators.js';

// Getting references to the HTML elements where the cart items, total, and quantity will be displayed
const cartItemList = document.getElementById('cartItemList');
const cartTableElm = document.getElementById('cartTable');
const cartTotalElm = document.getElementById('cartTotal');
const cartQuantityElm = document.getElementById('cartQuantity');
const cartSummaryQuantity = document.getElementById('cartSummaryQuantity');
const cartSummaryTotal = document.getElementById('cartSummaryTotal');
const totalCostElm = document.getElementById('totalCost');
const deliveryOptionsElm = document.getElementById('deliveryOptions');
const deliveryOptions = [
  {
    title: 'Standard Delivery',
    price: 5.0,
  },
  {
    title: 'Express Delivery',
    price: 10.0,
  },
  {
    title: 'Next Day Delivery',
    price: 15.0,
  },
];

// Function to handle the cart process
export async function handleCart() {
  // Check if the user is logged in
  if (userLoggedIn) {
    try {
      // Fetch the carts data from the API
      const carts = await getData('https://fakestoreapi.com/carts');
      const userLoggedInId = userLoggedIn.id;

      // Find the cart that belongs to the logged-in user
      const userCart = carts.find((cart) => cart.userId === userLoggedInId);
      const userCartProducts = userCart.products;

      // Initialize variables to store HTML content, total price, and total quantity
      let cartCardHTML = '';
      let cartTableHTML = '';
      let cartTotal = 0;
      let cartQuantity = 0;
      let totalCost = 0;

      // Loop through each product in the user's cart
      for (const product of userCartProducts) {
        // Fetch the product details from the API
        const productDetails = await getData(`https://fakestoreapi.com/products/${product.productId}`);

        // Update the total price and total quantity
        cartTotal += productDetails.price;
        cartQuantity += product.quantity;

        // Add event listener for delivery option changes
        deliveryOptionsElm &&
          deliveryOptionsElm.addEventListener('change', () => {
            totalCost = cartTotal + Number(deliveryOptionsElm.value);
            totalCostElm.innerHTML = `$${totalCost}`;
          });

        // Generate the HTML for the cart item and append it to the cartCardHTML string
        cartCardHTML += generateCartCardHTML(productDetails, product.quantity);
        cartTableHTML += generateTableCartHTML(productDetails, product.quantity);
      }

      // Update the HTML content of the cart item list, total price, and total quantity elements
      cartItemList && (cartItemList.innerHTML = cartCardHTML);
      cartTableElm && (cartTableElm.innerHTML = cartTableHTML);
      cartTotalElm && (cartTotalElm.innerHTML = `$${cartTotal}`);
      cartQuantityElm && (cartQuantityElm.innerHTML = cartQuantity);
      cartSummaryTotal && (cartSummaryTotal.innerHTML = `$${cartTotal}`);
      cartSummaryQuantity && (cartSummaryQuantity.innerHTML = `Items (${cartQuantity})`);

      // Populate delivery options
      deliveryOptions.map((option) => deliveryOptionsElm && deliveryOptionsElm.insertAdjacentHTML('beforeend', `<option value="${option.price.toFixed(2)}">${option.title} - $${option.price.toFixed(2)}</option>`));

      // Initialize total cost
      totalCost = cartTotal + Number(deliveryOptionsElm && deliveryOptionsElm.value);
      totalCostElm && (totalCostElm.innerHTML = `$${totalCost}`);
    } catch (error) {
      // Log an error message if fetching the carts data fails
      console.error('Failed to fetch the carts', error);
    }
  } else {
    // If the user is not logged in, display a message prompting them to log in
    cartItemList && (cartItemList.innerHTML = 'Login to see the cart');
  }
}

// Call the handleCart function to execute the cart handling process
handleCart();
