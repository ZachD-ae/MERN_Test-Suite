# Project Name

**Project Description:**
This **Quiz Application** is a dynamic web app built with **React**, **TypeScript**, and **MongoDB**. It allows users to answer quiz questions and navigate through the quiz flow. The app's data (quiz questions, user progress) is stored in **MongoDB**, providing scalability and flexibility. The frontend is built with **React**, **TypeScript**, and **Cypress** for testing, while the backend is powered by **Express.js** and **MongoDB**.


---

## Table of Contents
1. [Installation](#installation)
2. [Technologies Used](#technologies-used)
3. [Usage](#usage)
4. [Features](#features)
5. [Walkthrough Video](#walkthrough-video)
6. [Contributing](#contributing)
7. [License](#license)

---

## Installation

### Prerequisites
- **Node.js** (v14 or higher)  
- **npm** or **yarn** package manager

### Steps to Install

1. Clone the repository:
    ```bash
    git clone git@github.com:ZachD-ae/MERN_Test-Suite.git
    ```

2. Navigate to the project directory:
    ```bash
    cd yourprojectname
    ```

3. Install the dependencies:
    - Using **npm**:
        ```bash
        npm install
        ```
    - Or using **yarn**:
        ```bash
        yarn install
        ```

4. (Optional) For testing, ensure you have Cypress installed if it's part of your testing strategy:
    ```bash
    npm install cypress --save-dev
    ```

---

## Technologies Used
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Superset of JavaScript for static typing and better development experience
- **Cypress**: Framework for end-to-end and component testing
- **MongoDB**: NoSQL database for storing quiz data and user information
- **Express.js**: Web framework for Node.js, used to build the backend APIs
- **Node.js**: JavaScript runtime used for the backend server
- **HTML/CSS**: Standard technologies for structuring and styling the application
- **npm**: Package manager for managing dependencies
- **Webpack**: Module bundler for JavaScript and assets
- **Babel**: JavaScript compiler for modern JavaScript compatibility

---

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
    or, if using Yarn:
    ```bash
    yarn start
    ```

2. To run the app locally, open your browser and visit `http://localhost:3001` .

3. To run Cypress tests (if applicable), use the following:
    - To open the Cypress Test Runner:
        ```bash
        npm run cy:open
        ```
    - To run the tests in headless mode:
        ```bash
        npm run cy:run
        ```


---

## Features

- **Quiz Component Tests**: 
    - **Component test** for rendering the quiz component and ensuring it behaves correctly.
    - **Test**: Ensures that the quiz renders correctly with questions and answer options.

    ```tsx
    import React from 'react';
    import { mount } from 'cypress/react';
    import Quiz from '../../src/components/Quiz';  // Adjust path as needed

    describe('Quiz Component', () => {
      it('renders correctly with questions', () => {
        mount(<Quiz />);  // Use `mount` to render the component
        cy.get('h2').should('contain', 'Question 1');  // Ensure the first question is visible
        cy.get('button').should('have.length', 4);    // Ensure there are 4 answer options
      });

      it('lets the user select an answer', () => {
        mount(<Quiz />);
        cy.get('button').first().click();  // Simulate selecting the first answer
        cy.get('button').first().should('have.class', 'selected');  // Ensure it is selected
      });
    });
    ```

- **End-to-End Test for the Quiz Page**: 
    - **E2E test** for navigating to the quiz page and ensuring questions are displayed correctly.
    - **Test**: Ensures the quiz page is loaded, and the first question is visible, with options.

    ```typescript
    describe('Quiz End-to-End Test', () => {
      it('should display the quiz and allow answering questions', () => {
        cy.visit('http://127.0.0.1:3001/');  // Correctly specify the full URL
        cy.get('h2').should('contain', 'Question 1');  // Ensure the first question is visible
        cy.get('button').should('have.length', 4);    // Ensure there are 4 answer options

        // Simulate answering the quiz
        cy.get('button').first().click();
        cy.get('.next-button').click();    // Simulate clicking the "Next" button

        // Verify the next question appears
        cy.get('h2').should('contain', 'Question 2');
      });
    });
    ```

---

## Walkthrough Video

Here’s a link to the walkthrough video for this project:  
[**Walkthrough Video**](https://drive.google.com/file/d/1yKByLYyDEYVHJ-lYvj2llq27fdB1I1oc/view?usp=sharing)

Please follow the video for a detailed explanation of the app’s features and how to use it.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


