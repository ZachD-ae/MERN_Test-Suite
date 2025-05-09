describe('Quiz End-to-End Test', () => {
  it('should display the quiz and allow answering questions', () => {
    cy.visit('/quiz');  // Replace with your actual quiz page URL

    cy.get('h2').should('contain', 'Question 1'); // Ensure first question is visible
    cy.get('button').should('have.length', 4);  // Ensure 4 answer options are displayed

    cy.get('button').first().click();  // Simulate selecting the first answer
    cy.get('.next-button').click();    // Simulate clicking the "Next" button

    cy.get('h2').should('contain', 'Question 2');  // Ensure next question appears
  });
});
