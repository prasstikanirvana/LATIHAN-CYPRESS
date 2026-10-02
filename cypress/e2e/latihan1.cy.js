describe('latihan 1', () => {
    it('wajib isi email', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.url().should('include', '/commands/action')
        cy.wait(2000)
        cy.screenshot()

        cy.get('#email1')
            .type('recis.qa@gmail.com')
            .should('have.value', 'recis.qa@gmail.com')

        cy.get('#fullName1')
            .type('ayaseu')
            .should('have.attr', 'placeholder', 'Enter your name')

        cy.get('.action-checkboxes [type="checkbox"][value="checkbox1"]').not('[disabled]').check()
        
        
    })
})