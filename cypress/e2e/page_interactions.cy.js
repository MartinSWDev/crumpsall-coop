/// <reference types="cypress" />

describe('Page Interactions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    describe('Dropdown Toggle', () => {
        it('Toggles the dropdown menu visibility on button click', () => {
            cy.get('#dropdownButton').click()
            cy.get('#dropdownMenu').should('not.have.class', 'hidden')
            cy.get('#dropdownButton').click()
            cy.get('#dropdownMenu').should('have.class', 'hidden')
        })

        it('Navigates to the correct section on link click and menu closes', () => {
            cy.get('#dropdownButton').click()
            cy.get('#dropdownMenu').should('not.have.class', 'hidden')
            cy.get("#dropdownMenu ul li a[href='#updates']").click()
            cy.url().should('include', '#updates')
            cy.get('#updates').should('be.visible')
            cy.get('#dropdownMenu').should('have.class', 'hidden')
        })
    })

    describe('Sticky Navbar', () => {
        it('Sticky navbar div to the top of the page over main content', () => {
            cy.get('#faq').scrollIntoView()
            cy.get('#dropdown').should('have.class', 'sticky')
            cy.get('#dropdownMenu').should('have.class', 'sticky')
            cy.get('#dropdown').should('be.visible')
            cy.get('#dropdownButton').should('be.visible').click()
            cy.get('#dropdownMenu').should('be.visible')
            cy.get('#dropdownButton').click()
            cy.get('#dropdownMenu').should('not.be.visible')
        })
        it('Sticky navbar div should be out of view below main', () => {
            cy.get('main').scrollIntoView()
            cy.get('footer').scrollIntoView()
            cy.get('#dropdown').should('not.be.visible')
            cy.get('#dropdownMenu').should('not.be.visible')
        })
        it('Restores navbar to sticky position when scrolling back up', () => {
            cy.get('footer').scrollIntoView()
            cy.get('#dropdown').should('not.be.visible')
            cy.get('main').scrollIntoView()
            cy.get('#dropdown').should('be.visible')
        })
    })

    describe('Section name display', () => {
        it('Displays the correct section name in the dropdown when scrolling to the first section in main', () => {
            cy.get('main section')
                .first()
                .then(($section) => {
                    const sectionName = $section.find('h2').text()
                    cy.wrap($section).scrollIntoView({ duration: 500 })
                    cy.get('#dropdown p').should(
                        'have.text',
                        sectionName.trim()
                    )
                })
        })

        it('Displays the correct section name in the dropdown when scrolling to the last section in main', () => {
            cy.get('main section')
                .last()
                .then(($section) => {
                    const sectionName = $section.find('h2').text()
                    cy.wrap($section).scrollIntoView({ duration: 500 })
                    cy.get('#dropdown p').should(
                        'have.text',
                        sectionName.trim()
                    )
                })
        })

        it('Displays the last section name in the dropdown when moving out of main and hides the dropdown', () => {
            cy.get('main section')
                .last()
                .then(($section) => {
                    const lastSectionName = $section.find('h2').text()
                    cy.wrap($section).scrollIntoView({ duration: 500 })
                    cy.get('section:not(main section)')
                        .last()
                        .scrollIntoView({ duration: 500 })
                    cy.get('#dropdown p').should(
                        'have.text',
                        lastSectionName.trim()
                    )
                    cy.get('#dropdown').should('not.be.visible')
                })
        })

        it('Displays the correct section name in the dropdown when navlink is clicked', () => {
            cy.get('#dropdownButton').click()
            cy.get("#dropdownMenu ul li a[href='#faq']").click()
            cy.get('#dropdown p').should(
                'have.text',
                'Frequently Asked Questions'
            )
        })
    })

    describe('Progress Bar', () => {
        it('starts at 0% width before scrolling', () => {
            cy.get('#progressBar').should('have.attr', 'style', 'width: 0%')
        })

        it('increases width after scrolling down', () => {
            cy.window().then((win) => {
                win.scrollBy(0, 500)
                cy.wait(500)
                cy.get('#progressBar')
                    .invoke('attr', 'style')
                    .then((style) => {
                        const widthPercent = parseInt(
                            style.split(':')[1].trim()
                        )
                        expect(widthPercent).to.be.greaterThan(0)
                    })
            })
        })

        it('reaches 100% width at the bottom of the main content', () => {
            cy.scrollTo('bottom')
            cy.wait(500)
            cy.get('#progressBar')
                .invoke('attr', 'style')
                .then((style) => {
                    const widthPercent = parseInt(style.split(':')[1].trim())
                    expect(widthPercent).to.be.closeTo(100, 15)
                })
        })

        it('decreases width when scrolling back up the main content', () => {
            cy.scrollTo('bottom')
            cy.wait(500)
            cy.get('#progressBar')
                .invoke('attr', 'style')
                .then((bottomStyle) => {
                    const bottomWidthPercent = parseInt(
                        bottomStyle.split(':')[1].trim()
                    )
                    cy.get('main').scrollIntoView({ duration: 500 })
                    cy.wait(500)
                    cy.get('#progressBar')
                        .invoke('attr', 'style')
                        .then((topStyle) => {
                            const topWidthPercent = parseInt(
                                topStyle.split(':')[1].trim()
                            )
                            expect(topWidthPercent).to.be.lessThan(
                                bottomWidthPercent
                            )
                        })
                })
        })
    })
})
