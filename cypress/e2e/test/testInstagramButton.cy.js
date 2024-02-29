import inst from '../../fixtures/Instagram_btn.json'

describe ('Launch landing page and test Instagram button',()=>{
    
    it('tests the label of the button', ()=>{
        cy.fixture('inst').then(function(inst_data){
            this.inst_data = inst_data
        })
        cy.visit('https://2041partnership.nttdata.com')
        expect(inst,'the same data').to.deep.equal(userFixure)
        

    })

})


