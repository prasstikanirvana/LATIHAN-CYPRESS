describe('latihan 8', () => {

beforeEach(() => {
  cy.fixture('unamepw').as('credential')
})

it('login sukses', function(){
  cy.login(this.credential.benar.username, this.credential.benar.password)
  cy.url().should('include', '/inventory.html')
})  


})

     


