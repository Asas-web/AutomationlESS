/// <reference types="cypress" />


describe('Test app', () => {
  beforeEach(() => {
   
    cy.visit('https://www.telerik.com/support/demos')
  })


  it('displays Demo', () => {
    cy.get('.NavAlt-anchor').contains('Demo')
    })
  

  it('displays Reporting', () => {
  cy.get('.NavAlt-anchor').eq(3).contains('Reporting')
  })


  it('displays web', () => {
    cy.get('#web').contains('Web')
    })


    it('displays Blogs', () => {
      cy.get('li.TK-Footer-List-Item').contains('Blogs')
      })

   
      it.only('displays Social', () => {
        cy.get('.TK-Footer-List-Social').find('.TK-Footer-List-Horizontal-Item')
        })


     
      

})
