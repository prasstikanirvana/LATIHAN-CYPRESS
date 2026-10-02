describe('latihan 4', () => {
    it('Validasi data ditabel', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.url().should('include', '/tables')
        
        let find = 0
        cy.get ('#table1 tbody tr').each($row => {
            const due = Cypress.$($row).find('td').eq(3).text().trim()

            if (due === '$50.00'){
                find += 1
            }
        })
        .then(() => {
            expect(find, 'Ditemukan data dengan due 50 dollar').to.eq(2)
        })
})

    })
