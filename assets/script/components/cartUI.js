/* Function to initialize the cart functionalities */
export function initializeCart() {
  /* Get the cart icon and shopping cart elements by their IDs */
  const cartIcon = document.getElementById('cart-icon');
  const shoppingCart = document.getElementById('shopping-cart');
  let delay;

  /* Function to show the cart */
  const showCart = () => {
    clearTimeout(delay);
    shoppingCart.classList.remove('cart-hidden', 'cart-slide-out');
    delay = setTimeout(() => {
      shoppingCart.classList.add('cart-slide-in');
    }, 0);
  };

  /* Function to hide the cart */
  const hideCart = () => {
    clearTimeout(delay);
    shoppingCart.classList.remove('cart-slide-in');
    shoppingCart.classList.add('cart-slide-out');
    delay = setTimeout(() => {
      shoppingCart.classList.add('cart-hidden');
    }, 300);
  };

  /* Add click event listener to the cart icon to show the cart */
  cartIcon &&
    cartIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      showCart();
    });

  /* Add click event listener to the document to hide the cart when clicking outside of it */
  document.addEventListener('click', (event) => {
    if (shoppingCart && !shoppingCart.contains(event.target) && !cartIcon.contains(event.target)) {
      hideCart();
    }
  });

  /* Prevent clicks inside the cart from triggering the hide event */
  shoppingCart &&
    shoppingCart.addEventListener('click', (event) => {
      event.stopPropagation();
    });
}
