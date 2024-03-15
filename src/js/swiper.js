// card swiper setup for all swipers
// might need seperating ?
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
})
