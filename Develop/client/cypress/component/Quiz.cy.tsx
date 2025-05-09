import { mount } from 'cypress/react';
import Quiz from '../../src/components/Quiz';  // Adjust path based on your component location

describe('Quiz Component', () => {
  it('renders correctly with questions', () => {
    mount(<Quiz />);
    cy.get('h2').should('contain', 'Question 1');  // Check if the first question is displayed
    cy.get('button').should('have.length', 4);    // Ensure there are 4 answer options
  });

  it('lets the user select an answer', () => {
    mount(<Quiz />);
    cy.get('button').first().click();  // Click on the first answer
    cy.get('button').first().should('have.class', 'selected');  // Ensure it's selected
  });
});
