const baseUrl = Cypress.env('baseUrl')

describe('login page', () => {
  it('page title', () => {
    cy.visit(baseUrl)
      .contains('Form Authentication')
      .click()
      .title()
      .should('eq', 'The Internet')
  })

  it('heading', () => {
    cy.visit(baseUrl)
      .contains('Form Authentication')
      .click()
      .get('h2')
      .should('have.text', 'Login Page')
  })

  it('blank username and password', () => {
    cy.visit(baseUrl)
      .contains('Form Authentication')
      .click()
      .get('button')
      .click()
      .get('#flash')
      .should('contain.text', 'Your username is invalid!')
  })

  it('login', () => {
    cy.visit(baseUrl)
      .contains('Form Authentication')
      .click()
      .get('#username')
      .type('tomsmith')
      .get('#password')
      .type('SuperSecretPassword!')
      .get('button')
      .click()
      .get('#flash')
      .should('contain.text', 'You logged into a secure area')
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
