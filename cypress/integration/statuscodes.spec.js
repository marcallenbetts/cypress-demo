const baseUrl = Cypress.env('baseUrl')

describe('status codes', () => {
  it('page title', () => {
    cy.visit(baseUrl)
      .contains('Status Codes')
      .click()
      .title()
      .should('eq', 'The Internet')
  })

  it('heading', () => {
    cy.visit(baseUrl)
      .contains('Status Codes')
      .click()
      .get('h3')
      .should('have.text', 'Status Codes')
  })

  it('200 link', () => {
    cy.visit(baseUrl)
      .contains('Status Codes')
      .click()
    cy.contains('200')
      .should('have.attr', 'href')
      .then(href => {
        cy.request(`${baseUrl}/${href}`).then(response => {
          expect(response.status).to.eql(200)
        })
      })
  })

  it('301 link', () => {
    cy.visit(baseUrl)
      .contains('Status Codes')
      .click()
    cy.contains('301')
      .should('have.attr', 'href')
      .then(href => {
        cy.request(`${baseUrl}/${href}`).then(response => {
          expect(response.status).to.eql(301)
        })
      })
  })

  it('404 link', () => {
    cy.visit(baseUrl)
      .contains('Status Codes')
      .click()
    cy.contains('404')
      .should('have.attr', 'href')
      .then(href => {
        cy.request({ url: `${baseUrl}/${href}`, failOnStatusCode: false }).then(
          response => {
            expect(response.status).to.eql(404)
          }
        )
      })
  })

  it('500 link', () => {
    cy.visit(baseUrl)
      .contains('Status Codes')
      .click()
    cy.contains('500')
      .should('have.attr', 'href')
      .then(href => {
        cy.request({ url: `${baseUrl}/${href}`, failOnStatusCode: false }).then(
          response => {
            expect(response.status).to.eql(500)
          }
        )
      })
  })
})
