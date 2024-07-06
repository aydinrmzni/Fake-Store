/* Function to initialize form toggle functionalities */
export function initializeForms() {
  let delay;

  /* Check if the login toggle button exists and add a click event listener to it */
  document.getElementById('login-toggle') &&
    document.getElementById('login-toggle').addEventListener('click', function () {
      /* Remove the active class from the signup content */
      document.getElementById('signup-content').classList.remove('active');

      /* Clear any existing timeout to avoid conflicts */
      clearTimeout(delay);

      /* Add the active class to the login content after a delay */
      delay = setTimeout(() => {
        document.getElementById('login-content').classList.add('active');
      }, 300);

      /* Update the styles for the login and signup toggle buttons */
      this.classList.add('text-blue-500', 'border-blue-500');
      this.classList.remove('text-gray-500');
      document.getElementById('signup-toggle').classList.add('text-gray-500');
      document.getElementById('signup-toggle').classList.remove('text-blue-500', 'border-blue-500');
    });

  /* Check if the signup toggle button exists and add a click event listener to it */
  document.getElementById('signup-toggle') &&
    document.getElementById('signup-toggle').addEventListener('click', function () {
      /* Remove the active class from the login content */
      document.getElementById('login-content').classList.remove('active');

      /* Clear any existing timeout to avoid conflicts */
      clearTimeout(delay);

      /* Add the active class to the signup content after a delay */
      delay = setTimeout(() => {
        document.getElementById('signup-content').classList.add('active');
      }, 300);

      /* Update the styles for the login and signup toggle buttons */
      this.classList.add('text-blue-500', 'border-blue-500');
      this.classList.remove('text-gray-500');
      document.getElementById('login-toggle').classList.add('text-gray-500');
      document.getElementById('login-toggle').classList.remove('text-blue-500', 'border-blue-500');
    });
}
