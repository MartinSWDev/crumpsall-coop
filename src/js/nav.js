document.addEventListener("DOMContentLoaded", () => {
  // Dropdown selectors
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Dropdown toggle
  dropdownButton.addEventListener("click", () => {
    const isHidden = dropdownMenu.classList.toggle("hidden");
    dropdownButton.textContent = isHidden ? "Show" : "Hide";
  });
});

