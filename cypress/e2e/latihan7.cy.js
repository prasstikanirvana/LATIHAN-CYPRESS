describe('latihan 67', () => {})

     
    // it('login benar', () => {
    //     cy.visit('https://practice.expandtesting.com/login')
    //     cy.url().should('include', '/login') 
        
    //     cy.fixture('test.json').then((test) => {
    //         const berhasil = test.find(u => u.expected === 'success')

    //         cy.get('#username').type(berhasil.username)
    //         cy.get('#password').type(berhasil.password)
    //         cy.get('button[type="submit"]').should('have.text', 'Login').click()
        
    //         cy.url().should('include', '/secure')
    //         cy.get('#flash').should('contain', 'You logged into a secure area!')

    //     })

        it('login salah', () => {
        cy.visit('https://practice.expandtesting.com/login')
        cy.url().should('include', '/login') 
        
        cy.fixture('test.json').then((test) => {
            const berhasil = test.find(u => u.expected === 'failed')

            cy.get('#username').type(berhasil.username)
            cy.get('#password').type(berhasil.password)
            cy.get('button[type="submit"]').should('have.text', 'Login').click()
          cy.get('#flash b').should('contain', 'Your username is invalid!')

        })

       

        })
