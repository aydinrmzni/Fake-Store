// utils/helper.js

/**
 * Fetch data from the specified URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} - The fetched data as a JSON object.
 */
export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 * Send a POST request to the specified URL with the provided data.
 * @param {string} url - The URL to send the POST request to.
 * @param {Object} data - The data to send in the body of the POST request.
 * @returns {Promise<Object>} - The response data as a JSON object.
 */
export async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

/**
 * Send a PUT request to the specified URL with the provided data.
 * @param {string} url - The URL to send the PUT request to.
 * @param {Object} data - The data to send in the body of the PUT request.
 * @returns {Promise<Object>} - The response data as a JSON object.
 */
export async function putData(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

/**
 * Send a DELETE request to the specified URL.
 * @param {string} url - The URL to send the DELETE request to.
 * @returns {Promise<Object>} - The response data as a JSON object.
 */
export async function deleteData(url) {
  const response = await fetch(url, {
    method: 'DELETE',
  });
  return await response.json();
}
