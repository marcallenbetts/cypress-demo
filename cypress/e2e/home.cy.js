const baseUrl = Cypress.env('baseUrl')

describe('home page', () => {
  it('page title', () => {
    cy.visit(baseUrl)
      .title()
      .should('eql', 'The Internet')
  })

  it('heading 1', () => {
    cy.visit(baseUrl)
      .get('h1')
      .should('have.text', 'Welcome to the-internet')
  })

  it('heading 2', () => {
    cy.visit(baseUrl)
      .get('h2')
      .should('have.text', 'Available Examples')
  })

  it('footer test', () => {
    cy.visit(baseUrl)
      .get('#page-footer')
      .should('contain.text', 'Powered by Elemental Selenium')
  })

  it('footer link', () => {
    cy.visit(baseUrl)
      .get('#page-footer a')
      .should('have.attr', 'href', 'http://elementalselenium.com/')
  })
})
