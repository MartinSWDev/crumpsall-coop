import { defineConfig } from 'cypress'
export default defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        fixturesFolder: 'cypress/fixtures',
        baseUrl: 'http://localhost:5173',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
