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
