describe('My First Test', () => {
  it('Visits some site called Kitchen!', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})