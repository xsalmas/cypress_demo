describe ('launch landing page and click on Login link',()=>{
    
    it('tests opening a URL', ()=>{
        cy.visit('https://2041partnership.nttdata.com/')
        cy.contains('Instagram')
        //cy.contains('Instagram').click()
        //cy.url().should('include','/nttdataplus')

    })
})