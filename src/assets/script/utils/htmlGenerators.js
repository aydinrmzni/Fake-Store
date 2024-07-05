/**
 * Generates HTML for a product card.
 * @param {Object} product - The product data.
 * @returns {string} - The HTML string for the product card.
 */
export function generateProductCardHTML(product) {
  return `
    <div class="bg-white shadow-md rounded-lg overflow-hidden h-fit">
      <img src="${product.image}" alt="Product Image" class="mx-auto h-52 object-contain">
      <div class="p-4">
        <div class="text-sm text-gray-500">${product.category}</div>
        <div class="text-lg font-bold">${product.title}</div>
        <div class="text-xl text-gray-800">$${product.price}</div>
        <button data-id="${product.id}" class="add-to-cart mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Add to Cart</button>
      </div>
    </div>
  `;
}

/**
 * Generate HTML for a cart card.
 * @param {object} product - The product data.
 * @param {number} quantity - The quantity of the product.
 * @returns {string} - the HTML string for the cart card.
 */
export function generateCartCardHTML(product, quantity) {
  return `
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="${product.image}" alt="Product Image" class="w-12 h-12 rounded">
        <div class="ml-4">
          <div class="text-lg font-bold">${product.title}</div>
          <div class="text-gray-600">$${product.price}</div>
          <div class="flex items-center mt-2">
            <button class="text-gray-500"><i class="fas fa-minus"></i></button>
            <input type="number" class="w-12 mx-2 text-center border rounded" value="${quantity}" min="1">
            <button class="text-gray-500"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
      <button class="text-red-500"><i class="fas fa-trash"></i></button>
    </div>
  `;
}

/**
 * Generate HTML for a cart card.
 * @param {object} product - The product data.
 * @param {number} quantity - The quantity of the product.
 * @returns {string} - the HTML string for the cart card.
 */
export function generateTableCartHTML(product, quantity) {
  return `
    <tr class="border-t">
      <td class="py-4">
        <img src="${product.image}" alt="Product Image" class="w-12 h-12 rounded" />
      </td>
      <td class="py-4">${product.title}</td>
      <td class="py-4">${product.category}</td>
      <td class="py-4">
        <div class="flex items-center">
          <button class="text-gray-500">
            <i class="fas fa-minus"></i>
          </button>
          <input type="number" class="w-12 mx-2 text-center border rounded" value="${quantity}" min="1" />
          <button class="text-gray-500">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </td>
      <td class="py-4">$${product.price}</td>
      <td class="py-4">$${product.price}</td>
      <td class="py-4">
        <button class="text-red-500">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `;
}
