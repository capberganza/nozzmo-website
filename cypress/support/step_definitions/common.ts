import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

import recruitingPage from '../../e2e/pages/recruitingPage';

Given('I navigate to the Recruitment page', ()=>{
    Cypress.on('uncaught:exception', () => false);
    cy.visit('/recruiting')
    cy.wait(3000);
});

Then('I verify the links are coherent', ()=>{
    recruitingPage.verifyLinksAreCoherent();
})

Then('I verify the links are working', ()=>{
    recruitingPage.verifyLinksAreWorking();
})
