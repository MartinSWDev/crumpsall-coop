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

