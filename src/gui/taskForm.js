import "../css/popUpForm.css";

/**
 * Initializes the popup form for adding new tasks
 * Sets up event listeners for opening and closing the form modal
 */
export function initTaskForm() {
  // Get form elements from the DOM
  const openBtn = document.getElementById("openFormBtn");
  const popup = document.getElementById("popupForm");
  const closeBtn = document.getElementById("closeFormBtn");

  // Show popup when user clicks the "Add Task" button
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Hide popup when user clicks the close button
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Hide popup when user clicks outside the form content
  // This allows the user to close the modal by clicking the dark overlay
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}
