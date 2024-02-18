import { Then } from '@badeball/cypress-cucumber-preprocessor';

import recruitingPage from '../../e2e/pages/recruitingPage';

Then('I click the send button', ()=>{
    recruitingPage.getSendButton().click();
});

Then('I should see all fields are required', ()=>{
    recruitingPage.getMandatoryNameLabel().should('be.visible');
    recruitingPage.getMandatoryEmailLabel().should('be.visible');
    recruitingPage.getMandatoryDescriptionLabel().should('be.visible');
});

Then('I fill the {string} field', (field: string)=>{
    switch (field) {
        case 'name':
            recruitingPage.getNameField().type('John doe');
            break;
        case 'email':
            recruitingPage.getEmailField().type('johndoe@example.com')
            break;
        default:
            recruitingPage.getDescriptionField().type('please help with my automation project');
            break;
    }
});

Then('I should not see the {string} alert',  (field: string)=>{
    switch (field) {
        case 'name':
            recruitingPage.getMandatoryNameLabel().should('not.exist');
            break;
        case 'email':
            recruitingPage.getMandatoryEmailLabel().should('not.exist');
            break;
        default:
            recruitingPage.getMandatoryDescriptionLabel().should('not.exist');
            break;
    }
});

Then('I should see a confirmation at the top',  ()=>{
    cy.contains('Received, will get in touch soon!').should('be.visible');
});

Then('I fill the email field with {string}',  (email: string)=>{
    recruitingPage.getEmailField().type(email);
});

Then('I should see that its not a valid email',  ()=>{
    recruitingPage.getMustBeValidEmailLabel().should('be.visible');
});


