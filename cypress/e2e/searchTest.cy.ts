describe('Flow Search Post', () => {
    it('passes', () => {
        cy.visit('/')
        cy.get('input[name="search"]').type('cypress').should('have.value', 'cypress')
        cy.get('input[name="search"]').should('have.value', 'cypress')
        cy.get('.row').children('.flex').trigger('mouseover').get('svg').should('contain.text', 'Not Found')
        cy.get('input[name="search"]').clear()
        cy.get('.row').children().should('have.length', 11)
        cy.get('input[name="search"]').type('Dave').should('have.value', 'Dave')

    })
})

describe('See Search Result', () => {
    it('passes', () => {
        const baseUrl = Cypress.config('baseUrl')
        cy.visit('/')
        cy.get('input[name="search"]').type('Dave').should('have.value', 'Dave')
        cy.intercept('GET', 'https://dummyjson.com/posts/search?q=Dave', {
            statusCode: 200,
        })
        cy.wait(1000)
        cy.get('.row').children().should('have.length', 3)
        cy.get('h1').contains('Dave').should('be.visible').trigger('mouseover')
    })
})