/// <reference types="cypress" />

describe('Task1 validating the selectors', () => {
    beforeEach(() => {
     
      cy.visit('https://demo.productionready.io/#/register')
    })
  
  
    it('Validate finding the slogan', () => {
      cy.get('.navbar-brand').contains('conduit')
      })
    
  
    it('displays Home', () => {
    cy.get('.nav-link').eq(0).contains('Home')
    })
  
  
    it('displays Sign up', () => {
      cy.get('.nav-link').contains('Sign up')
      })
  
  
    it('displays Sign Up', () => {
        cy.get('h1.text-xs-center').contains('Sign up')
       })
  
     
    it('displays Have an account?', () => {
          cy.get('.text-xs-center').contains('Have an account?')
      })
  
    it('displays UserName Field', () => {
        cy.get('input[placeholder="Username"]').type('Ahmed');

        })
      
    it('displays Email Field', () => {
            cy.get('input[placeholder="Email"]').type('Ahmed@123');
    
            })
        
    it('displays Password Field', () => {
        cy.get('input[placeholder="Password"]').type('Ahmed@123');
        
     })

     it('displays Submit Button', () => {
        cy.get('button[type="submit"]').click();
        
     }) 

     it('displays Slogan in Footer', () => {
        cy.get('.container').contains('conduit');  
     }) 


     it('displays  Footer', () => {
        cy.get('.attribution')
     }) 
  })
  