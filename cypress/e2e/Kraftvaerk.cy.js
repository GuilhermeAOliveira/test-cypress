import {GooglePage} from "../page-objects/googlePage"

const googlePage = new GooglePage();

context('Look for Kraftvaerk web page', () => {
    beforeEach(() => {
        cy.visit("https://google.com.br")
    })

    it("Look for kraftvaerk on google and assert the url", ()=> {
      googlePage.lookForUrl("kraftvaerk")
      googlePage.checkUrl("https://kraftvaerk.com/")
    })
})