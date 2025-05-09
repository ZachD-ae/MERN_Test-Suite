describe('Quiz End-to-End Test', () => {
  it('should display the quiz and allow answering questions', () => {
    cy.visit('/');  

    cy.get('h2').should('contain', 'Question 1'); 
    cy.get('button').should('have.length', 4);  

    cy.get('button').first().click();  
    cy.get('.next-button').click();   

    cy.get('h2').should('contain', 'Question 2');  
  });
});
