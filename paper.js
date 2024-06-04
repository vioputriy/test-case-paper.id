describe('', function(){
    it('tc-1',function(){
       cy.visit('https://www.paper.id/webappv1/#/login')
    })
})


Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})