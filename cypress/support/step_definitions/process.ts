import { Then } from '@badeball/cypress-cucumber-preprocessor';

import recruitingPage from '../../e2e/pages/recruitingPage';

Then('I scroll to Our Process section', ()=>{
    recruitingPage.getOurProcessTitle().scrollIntoView().should('be.visible')
});

Then('I click on {string} and verify the {string} appears', (processTitle: string, processDescription: string)=>{
    cy.contains(processTitle).click();
    cy.contains(processDescription).should('be.visible');
});
