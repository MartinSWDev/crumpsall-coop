document.addEventListener("DOMContentLoaded", () => {
  // Dropdown selectors
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownLinks = document.querySelectorAll("#dropdownMenu a");
  // Nav selectors
  const main = document.querySelector("main");
  const dropdownDiv = document.getElementById("dropdown");
  const mainSections = document.querySelectorAll("main section");

  // Dropdown toggle
  dropdownButton.addEventListener("click", () => {
    const isHidden = dropdownMenu.classList.toggle("hidden");
    dropdownButton.textContent = isHidden ? "Show" : "Hide";
  });
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const isHidden = dropdownMenu.classList.toggle("hidden");
      dropdownButton.textContent = isHidden ? "Show" : "Hide";
    });
  });

  // Navbar sticky over main
  window.addEventListener("scroll", function () {
    const mainRect = main.getBoundingClientRect();
    const mainBottom = mainRect.bottom + window.scrollY - 56;
    if (this.window.scrollY > mainBottom) {
      const scrollPastMain = this.window.scrollY - mainBottom;
      dropdownDiv.style.transform = `translateY(-${scrollPastMain}px)`;
      dropdownMenu.style.transform = `translateY(-${scrollPastMain}px)`;
    } else {
      dropdownDiv.style.transform = "translateY(0)";
      dropdownMenu.style.transform = "translateY(0)";
    }
  });

  // Section name display
  const observer = new IntersectionObserver(
    (entries) => {
      entries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const topIntersectingEntry = entries[0];

      if (topIntersectingEntry && topIntersectingEntry.isIntersecting) {
        document.querySelector("#dropdown p").textContent =
          topIntersectingEntry.target.querySelector("h2").textContent;
      }
    },
    {
      root: null,
      threshold: 1,
    }
  );
  mainSections.forEach((section) => observer.observe(section));
});

