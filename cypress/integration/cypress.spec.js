const baseUrl = Cypress.env('baseUrl')

describe('cypress tests', () => {
  it('Cookies', () => {
    cy.visit(baseUrl)
    cy.getCookies().should('have.length', 5)
    cy.clearCookies()
    cy.getCookies().should('have.length', 0)
  })

  it('save request as a fixture', () => {
    cy.request('https://jsonplaceholder.typicode.com/todos/1').then(
      response => {
        cy.writeFile('cypress/fixtures/test.json', response.body)
      }
    )
    cy.readFile('cypress/fixtures/test.json').then(json => {
      console.log(JSON.stringify(json))
    })
  })

  it('fixture and route example', () => {
    // start server
    cy.server()

    // default directory is /cypress/fixutres
    cy.fixture('example.json').as('example')

    // route to mock
    cy.route({
      method: 'POST',
      url: '/entry_ad',
      status: 200,
      response: '@example'
      // or response: 'fixture:example'
    }).as('entryad')

    cy.visit(baseUrl)
      .contains('Entry Ad')
      .click()
    cy.contains('Close').click()

    // this verifies that route was used
    cy.wait(['@entryad'])

    // disable routing
    cy.server({ enable: false })
  })

  it('misc', () => {
    // lodash
    const randomBool = Cypress._.sample([true, false])
    console.log(randomBool)

    // moment
    const date = Cypress.moment()
    console.log(date.toString())
  })
})
