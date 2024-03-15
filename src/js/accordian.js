document.addEventListener('DOMContentLoaded', () => {
    const accordionQuestions = document.querySelectorAll('.accordion-question')

    accordionQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling
            answer.classList.toggle('hidden')

            const isExpanded = question.getAttribute('aria-expanded') === 'true'
            question.setAttribute('aria-expanded', !isExpanded)
        })
    })
})
