// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordionContainer = document.querySelector('#accordion-container')

    accordionContainer.addEventListener('click', (event) => {
        const question = event.target.closest('.accordion-question')
        if (!question) return

        const answer = question.nextElementSibling
        answer.classList.toggle('hidden')

        const isExpanded = question.getAttribute('aria-expanded') === 'true'
        question.setAttribute('aria-expanded', !isExpanded)
    })
})
