/* Function to initialize tab functionalities */
export function initializeTabs() {
  /* Select all elements with the class 'tab-btn' and add a click event listener to each */
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      /* Loop through all tab buttons to reset their styles */
      document.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
      });

      /* Apply active styles to the clicked button */
      button.classList.add('bg-blue-500', 'text-white');
      button.classList.remove('bg-gray-200', 'text-gray-700');

      /* Hide all tab contents */
      document.querySelectorAll('.tab-content').forEach((content) => {
        content.classList.remove('active');
      });

      /* Show the tab content corresponding to the clicked button */
      document.getElementById(button.dataset.target).classList.add('active');
    });
  });
}
