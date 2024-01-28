describe('See Post detail', () => {
  it('passes', () => {
    const baseUrl = Cypress.config('baseUrl')
    cy.visit('/')
    cy.get('a[href="/post/2"]').click()
    cy.intercept('GET', 'https://dummyjson.com/posts/2', {
      statusCode: 200,
      body: {
        id: 2,
      }
    })
    cy.wait(1000)
    cy.get('.row.mt-5').children().should('have.length', 2)
    cy.get('h1').contains('He was').should('be.visible').trigger('mouseover')
    cy.get('button').contains('Back').should('be.visible')
    cy.get('button').contains('Back').click()
    cy.url().should('eq', baseUrl + '/')
  })
})

describe('Flow Post Comment', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('a[href="/post/2"]').click()
    cy.intercept('GET', 'https://dummyjson.com/posts/2', {
      statusCode: 200,
    })
    cy.wait(1000)
    cy.get('button').contains('Post').should('be.visible').should('be.disabled')
    cy.get('input[name="comment"]').type('Mencengangkan').should('have.value', 'Mencengangkan')
    cy.get('button').contains('Post').should('be.visible').should('be.enabled')
    cy.get('button').contains('Post').click()
    cy.get('p').contains('Mencengangkan').should('be.visible')
    cy.get('input[name="comment"]').clear()
    cy.get('button').contains('Post').should('be.visible').should('be.disabled')
    cy.get('input[name="comment"]').type('Passed Kah?').should('have.value', 'Passed Kah?')
    cy.get('button').contains('Post').should('be.visible').should('be.enabled')
    cy.get('button').contains('Post').click()
  })
})