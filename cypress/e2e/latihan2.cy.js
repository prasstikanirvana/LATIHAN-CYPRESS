describe('latihan 1', () => {
    it('wajib isi email', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.url().should('include', '/commands/action')
        
        cy.get('#fullName1')
            .type('ayaseu')
            .should('have.attr', 'placeholder', 'Enter your name')

        cy.get('.action-checkboxes [type="checkbox"][value="checkbox1"]').not('[disabled]').check()
        // cy.get('.action-checkboxes [type="checkbox"][value="checkbox2"]').check()
        cy.get('.action-checkboxes [type="checkbox"][value="checkbox3"]').not('[disabled]').check()

        cy.pause()

        cy.get('button[type="submit"]').should('have.text', 'Submit').click()
        cy.get('.action-form').next().should('have.text', 'Your form has been submitted!')     
        
    })
})