// describe('My First Test', () => {
//   it('Visits some site called Kitchen!', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     cy.url().should('include','/commands/actions')

//     // add an input
//     cy.get('.action-email').type('akram@a.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'akram@a.com')
//   })
// })

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })
  })