describe('latihan 6', () => {})

     
    it('API user 3', () => {
        cy.request('https://reqres.in/api/users/3')
        .then((Response) => {
            expect(Response.status).eq(200)

            const isi = Response.body.data

            if (isi.id === 4) {
                expect(isi.email).to.eq('emma.wong@reqres.in')
                cy.log('Data ditemukan!')}
                else {
                    cy.log('Data tidak ditemukan')
                }
            

        })})
