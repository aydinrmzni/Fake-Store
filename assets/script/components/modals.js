/* Function to toggle the visibility of a modal */
export function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.toggle('hidden');
}

/* Function to initialize modal functionalities */
export function initializeModals() {
  const addProductButton = document.getElementById('add-product');
  const addCartButton = document.getElementById('add-cart');
  const addUserButton = document.getElementById('add-user');
  const adminContentElm = document.getElementById('adminContent');

  /* Add event listener to the admin content element to handle clicks on update buttons */
  adminContentElm &&
    adminContentElm.addEventListener('click', (e) => {
      if (e.target.classList.contains('update-product')) {
        toggleModal('updateProductModal');
      } else if (e.target.classList.contains('update-cart')) {
        toggleModal('updateCartModal');
      } else if (e.target.classList.contains('update-user')) {
        toggleModal('updateUserModal');
      }
    });

  /* Add event listener to the add product button to show the add product modal */
  addProductButton &&
    addProductButton.addEventListener('click', () => {
      toggleModal('addProductModal');
    });

  /* Add event listener to the add cart button to show the add cart modal */
  addCartButton &&
    addCartButton.addEventListener('click', () => {
      toggleModal('addCartModal');
    });

  /* Add event listener to the add user button to show the add user modal */
  addUserButton &&
    addUserButton.addEventListener('click', () => {
      toggleModal('addUserModal');
    });
}

/* Function to dynamically add a new product field to the cart */
export function addProductField() {
  const cartProducts = document.getElementById('cartProducts');
  const productCount = cartProducts.children.length;
  const newProductField = document.createElement('div');
  newProductField.classList.add('flex', 'items-center', 'space-x-2');
  newProductField.innerHTML = `
    <select name="products[${productCount}][productId]" class="w-full p-2 border border-gray-300 rounded" required>
      <!-- Example options, replace with dynamic content -->
      <option value="1">Product 1 (ID: 1)</option>
      <option value="2">Product 2 (ID: 2)</option>
    </select>
    <input type="number" name="products[${productCount}][quantity]" class="w-20 p-2 border border-gray-300 rounded" min="1" value="1" required>
  `;
  cartProducts.appendChild(newProductField);
}
