import "./addTaskDOM.css";

export function addTaskDOM() {
  const openBtn = document.getElementById("openFormBtn");
  const popup = document.getElementById("popupForm");
  const closeBtn = document.getElementById("closeFormBtn");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // show popup
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none"; // hide popup
  });

  // Optional: close when clicking outside the form
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}
