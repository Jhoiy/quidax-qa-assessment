const BootstrapModals = require('../../support/page_objects/bootstrapModals');

describe('Bootstrap Single Modal Tests', () => {
    const bootstrapModals = new BootstrapModals();

    beforeEach(() => {
        cy.visit('/bootstrap-modal-demo.html');
    });

    it('should open the modal on button click', () => {
        bootstrapModals.getLaunchSingleModalButton().click();
        bootstrapModals.getSingleModalTitle().should('contain.text', 'Modal Title');
    });

    it('should close the modal on close button click', () => {
        bootstrapModals.getLaunchSingleModalButton().click();
        bootstrapModals.getCloseSingleModalButton().click();
    });
});


describe('Bootstrap Multiple Modal Tests', () => {
    const bootstrapModals = new BootstrapModals();

    beforeEach(() => {
        cy.visit('/bootstrap-modal-demo.html');
    });

    it('should open the first multiple modal on button click', () => {
        bootstrapModals.getLaunchFirstMultipleModalButton().click();
        bootstrapModals.getFirstMultipleModalTitle().should('contain.text', 'First Modal');
    });

    it('should close the first multiple modal on close button click', () => {
        bootstrapModals.getLaunchFirstMultipleModalButton().click();
        bootstrapModals.getCloseFirstMultipleModalButton().click();
    });

    it('should open the second multiple modal on button click', () => {
        bootstrapModals.getLaunchFirstMultipleModalButton().click();
        bootstrapModals.getLaunchSecondMultipleModalButton().click();
        bootstrapModals.getSecondMultipleModalTitle().should('contain.text', 'Modal 2');
    });

    it('should close the second multiple modal on close button click', () => {
        bootstrapModals.getLaunchFirstMultipleModalButton().click();
        bootstrapModals.getLaunchSecondMultipleModalButton().click();
        bootstrapModals.getCloseSecondMultipleModalButton().click();
    });
});
