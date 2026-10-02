describe('latihan 1', () => {
    it('wajib isi email', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.url().should('include', '/upload')
        
        //cy.pause()
        
        cy.get('#file-upload')
            .selectFile('cypress/fixtures/dummy.pdf')
            
        //cy.pause()

        cy.get('#file-submit').click()

        cy.get('.example h3').should('have.text', 'File Uploaded!')

        cy.get('#uploaded-files').should('contain', 'dummy.pdf')

    })
})