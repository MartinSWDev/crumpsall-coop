gsap.registerPlugin(ScrollTrigger);

// Hamburger animation
let isX = false;
export default function toggleBrickAnimation() {
  if (!isX) {
    isX = true;
    gsap.to("#row2, #row4", {
      duration: 0.5,
      opacity: 0,
      ease: "power1.out",
    });
    gsap.to("#row1", {
      duration: 0.5,
      rotation: 45,
      y: "+=30",
      transformOrigin: "center center",
      ease: "power1.inOut",
    });
    gsap.to("#row3", {
      duration: 0.5,
      rotation: -45,
      y: "-=4",
      transformOrigin: "center center",
      ease: "power1.inOut",
    });
  } else {
    isX = false;
    gsap.to("#row2, #row4", {
      duration: 0.5,
      opacity: 1,
      ease: "power1.out",
      display: "block",
    });
    gsap.to("#row1", {
      duration: 0.5,
      rotation: 0,
      y: "-=30",
      transformOrigin: "center center",
      ease: "power1.inOut",
    });
    gsap.to("#row3", {
      duration: 0.5,
      rotation: 0,
      y: "+=4",
      transformOrigin: "center center",
      ease: "power1.inOut",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Example animation for the spline canvas
  // gsap.to("#canvas3d", {
  //   scrollTrigger: {
  //     trigger: "#hero",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     markers: true,
  //   },
  //   opacity: 1,
  // });

  // Animation for the text to fade in to full opacity
  gsap.to("h1, h2", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    opacity: 1,
    duration: 1,
    stagger: 0.5,
  });
});

