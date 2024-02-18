import { Then } from '@badeball/cypress-cucumber-preprocessor';

import recruitingPage from '../../e2e/pages/recruitingPage';

Then('I verify the page loads', ()=>{
    recruitingPage.getTitle().should('be.visible');
    recruitingPage.getForm().should('be.visible');
});
