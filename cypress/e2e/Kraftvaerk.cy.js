context('Look for Kraftvaerk web page', () => {
    beforeEach(() => {
        cy.visit('https://google.com.br')
    })
  
    it('Search for Kraftvaerk', () => {
        cy.get('.gLFyf.gsfi').type('Kraftvaerk')
        .type('{enter}')

        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div.yuRUbf > a').should('have.attr', 'href')
        .should('eq', 'https://kraftvaerk.com/')
    })
})