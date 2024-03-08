document.addEventListener("DOMContentLoaded", () => {
  // Dropdown selectors
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  // Nav selectors
  const main = document.querySelector("main");
  const dropdownDiv = document.getElementById("dropdown");
  // Dropdown toggle
  dropdownButton.addEventListener("click", () => {
    const isHidden = dropdownMenu.classList.toggle("hidden");
    dropdownButton.textContent = isHidden ? "Show" : "Hide";
  });

  // Navbar sticky over main
  window.addEventListener("scroll", function () {
    const mainRect = main.getBoundingClientRect();
    const mainBottom = mainRect.bottom + window.scrollY - 56;
    console.log(this.window.scrollY, mainBottom);
    if (this.window.scrollY > mainBottom) {
      const scrollPastMain = this.window.scrollY - mainBottom;
      dropdownDiv.style.transform = `translateY(-${scrollPastMain}px)`;
      dropdownMenu.style.transform = `translateY(-${scrollPastMain}px)`;
    } else {
      dropdownDiv.style.transform = "translateY(0)";
      dropdownMenu.style.transform = "translateY(0)";
    }
  });
});

