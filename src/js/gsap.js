gsap.registerPlugin(ScrollTrigger)

// Timeline to handle brick animation and dropdown
let isX = false

const brickTL = gsap.timeline({ paused: true })
brickTL
    .to('#row2, #row4', { opacity: 0, ease: 'power1.out', duration: 0.5 })
    .to(
        '#row1',
        {
            rotation: 45,
            y: '+=30',
            transformOrigin: 'center center',
            ease: 'power1.inOut',
            duration: 0.5,
        },
        0
    )
    .to(
        '#row3',
        {
            rotation: -45,
            y: '-=4',
            transformOrigin: 'center center',
            ease: 'power1.inOut',
            duration: 0.5,
        },
        0
    )

export default function toggleBrickAnimation() {
    if (!isX) {
        brickTL.play()
    } else {
        brickTL.reverse()
    }
    isX = !isX
}

// Animation for the text to fade in to full opacity
gsap.to('h1, h2', {
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
    },
    opacity: 1,
    duration: 1,
    stagger: 0.5,
})
