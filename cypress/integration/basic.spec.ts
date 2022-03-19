/// <reference types="cypress" />

context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('category', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')

    cy.contains('p', 'Sudoku / 数独')
      .should('exist')

    cy.contains('p', 'Sudoku / 数独')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/sudoku')
  })
})
