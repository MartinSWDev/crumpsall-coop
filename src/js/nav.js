document.addEventListener("DOMContentLoaded", () => {
  // Dropdown selectors
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownLinks = document.querySelectorAll("#dropdownMenu a");
  const dropdownP = document.querySelector("#dropdown p");
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
      console.log(link.textContent);
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
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting
      );
      intersectingEntries.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      );

      if (intersectingEntries.length > 0) {
        const topIntersectingEntry = intersectingEntries[0];
        dropdownP.textContent =
          topIntersectingEntry.target.querySelector("h2").textContent;
      }
    },
    {
      root: null,
      threshold: 0.2,
      rootMargin: "0px 30% -50% 0px",
    }
  );
  mainSections.forEach((section) => observer.observe(section));
});

