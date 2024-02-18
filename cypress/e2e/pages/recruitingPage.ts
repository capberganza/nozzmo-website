export default class recruitingPage {
    static getTitle = () => cy.get('.items-start')
    static getForm = () => cy.get('.border-white\\/80', {timeout: 5000});
    static getNameField = () => cy.get('#name');
    static getEmailField = () => cy.get('#email');
    static getDescriptionField = () => cy.get('#more');
    static getSendButton = () => cy.get('form > .border');
    static getMandatoryNameLabel = () => cy.contains('Name is required');
    static getMandatoryEmailLabel = () => cy.contains('Email is required');
    static getMandatoryDescriptionLabel = () => cy.contains('Description is required');
    static getMustBeValidEmailLabel = () => cy.contains('Must be a valid email');
    static getOurProcessTitle = () => cy.contains('Our Process');

    static verifyLinksAreCoherent = () => {
        let overallCoherence = true;

        cy.get('a').each(link => {
            const linkText = Cypress.$(link).text().trim();
            const linkHref = Cypress.$(link).attr('href');

            const wordsInLinkText = linkText.split(' ');

            cy.log(`Link Text: ${linkText}, Link Href: ${linkHref}`);

            const isCoherent = wordsInLinkText.some(word => linkHref.includes(word.trim()));
            cy.log(`Is Coherent: ${isCoherent}`);

            overallCoherence = overallCoherence && isCoherent;
        }).then(() => {
            cy.wrap(overallCoherence).should('be.true');
        });
    }

    static verifyLinksAreWorking = () => {
        cy.get('a').each(link => {
            const linkHref = Cypress.$(link).attr('href');
    
            cy.log(`Link Href: ${linkHref}`);
    
            cy.wrap(linkHref).should('not.be.empty');
            cy.wrap(linkHref).should('not.match', /^#/);
        });
    };
}
