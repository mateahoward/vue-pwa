describe('Interacts with GitHub Checker', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.get('main').should('be.visible').contains('GitHub Username')
  })
  it('Types GitHub username into the form field', () => {
    cy.get('button').contains('search', {matchCase: false})
    cy.get('input').type('mateahoward{enter}')
  })
  it('Displays GitHub Profile', () => {
    cy.get('main').contains('Matea Howard', {matchCase: false})
    cy.get('a').contains('profile', {matchCase: false})
  })
})