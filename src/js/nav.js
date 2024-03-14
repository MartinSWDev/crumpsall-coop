import toggleBrickAnimation from "./gsap.js";

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
  // Progress bar selectors
  const progressBar = document.getElementById("progressBar");

  // set initial values on dropdown menu to avoid lag from tailwind and gsap
  gsap.set(dropdownMenu, {
    scaleY: 0,
    autoAlpha: 0,
    transformOrigin: "top",
  });

  // Dropdown animation Timeline
  const dropdownTL = gsap
    .timeline({
      paused: true,
      reversed: true,
      onStart: () => {
        dropdownMenu.classList.remove("hidden");
        dropdownMenu.style.visibility = "visible";
      },
      onReverseComplete: () => {
        dropdownMenu.classList.add("hidden");
        dropdownMenu.style.visibility = "hidden";
      },
    })
    .to(dropdownMenu, { scaleY: 1, duration: 0.3, ease: "none" }, 0)
    .fromTo(
      dropdownMenu,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "none" },
      0
    );

  // Dropdown toggle
  dropdownButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleBrickAnimation();

    if (dropdownTL.reversed()) {
      dropdownTL.play();
    } else {
      dropdownTL.reverse();
    }

    const isPressed = dropdownButton.getAttribute("aria-pressed") === "true";
    dropdownButton.setAttribute("aria-pressed", String(!isPressed));
  });

  // Dropdown close on link click
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!dropdownTL.reversed()) {
        toggleBrickAnimation();
        dropdownTL.reverse().eventCallback("onReverseComplete", () => {
          dropdownMenu.classList.add("hidden");
          dropdownButton.setAttribute("aria-pressed", "false");
        });
      }
    });
  });

  // Dropdown menu position
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
        dropdownP.textContent = topIntersectingEntry.target
          .querySelector("h2")
          .textContent.trim();
      }
    },
    {
      root: null,
      threshold: 0.2,
      rootMargin: "0px 30% -50% 0px",
    }
  );
  mainSections.forEach((section) => observer.observe(section));

  // Progress bar on scroll
  function updateProgressBar() {
    const mainTop = main.offsetTop;
    const mainBottom = mainTop + main.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const start = mainTop - windowHeight;
    const end = mainBottom - windowHeight + mainTop;

    let progressPercentage = 0;
    if (scrollY > start) {
      progressPercentage = ((scrollY - start) / (end - start)) * 100;
    }

    progressPercentage = Math.max(0, Math.min(100, progressPercentage));
    progressBar.style.width = `${progressPercentage}%`;
  }

  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);
});

