import {getData, postData, putData, deleteData} from '../utils/helpers.js'; // Import helper functions

/* Function to fetch products from the API */
export async function getProduct(singleProduct = 0, limitProduct = 0) {
  let result; // Initialize the result variable

  /* Fetch a single product if singleProduct is specified */
  if (singleProduct !== 0) {
    const response = await fetch(`https://fakestoreapi.com/products/${singleProduct}`);
    result = await response.json();

    /* Fetch a limited number of products if limitProduct is specified */
  } else if (limitProduct !== 0) {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limitProduct}`);
    result = await response.json();

    /* Fetch all products if no specific conditions are given */
  } else {
    const response = await fetch(`https://fakestoreapi.com/products`);
    result = await response.json();
  }

  return result; // Return the fetched data
}
