export class GooglePage{
    lookForUrl(text) {
        cy.get('.gLFyf.gsfi').type(text)
        .type('{enter}')
    }

    checkUrl(url){
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div.yuRUbf > a').should('have.attr', 'href')
        .should('eq', url)
    }
};