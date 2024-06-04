describe('login', () => {
  it('passes', () => {
    cy.visit('https://www.paper.id/webappv1/#/login')
    cy.get('[data-cy="identifier"]').type('kandidat@paper.id')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="password"]').type('paper.id')
    cy.get('.auth-input-icon').click()
    cy.get('.login-password-dialog__password > form.ng-dirty > [data-cy="submit"]').click();

  })
})
describe('unregister', () => {
 it('passes', () => {
    cy.visit('https://www.paper.id/webappv1/#/login')
    cy.get('[data-cy="identifier"]').type('vioputriyuwan@gmail.com')
    cy.get('[data-cy="submit"]').click()
   })
 })
