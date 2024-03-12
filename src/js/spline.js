import { Application } from "@splinetool/runtime";

// Hero Section Animation
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app
  .load("https://prod.spline.design/KAO40kaAVApIiGuJ/scene.splinecode")
  .then(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onscroll: () => {
          app.emitEvent("step", "bigHouse");
        },
      },
    });
  });

