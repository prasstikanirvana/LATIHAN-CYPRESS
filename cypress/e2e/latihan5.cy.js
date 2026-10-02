describe('latihan 5', () => {
    it('alert 1', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.url().should('include', '/javascript_alerts')

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })

        cy.contains('Click for JS Alert').click()

        cy.get('#result').should('contain', 'You successfully clicked an alert')
        })

    
   
    it('alert 2', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.url().should('include', '/javascript_alerts')

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.contains('Click for JS Confirm').click()

        cy.get('#result').should('contain','You clicked: Ok')
    })

    })
