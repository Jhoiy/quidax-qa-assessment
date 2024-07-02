const BootstrapAlerts = require('../../support/page_objects/bootstrapAlerts');

describe('Bootstrap Alerts Tests', () => {
    const bootstrapAlerts = new BootstrapAlerts();

    beforeEach(() => {
        cy.visit('/bootstrap-alert-messages-demo.html');
    });

    it('should display normal success message', () => {
        bootstrapAlerts.getNormalSuccessButton().click();
        bootstrapAlerts.getNormalSuccessAlert().should('be.visible');
    });

    it('should display a success alert message with correct text', () => {
        bootstrapAlerts.getNormalSuccessButton().click();
        bootstrapAlerts.getNormalSuccessAlert().should('contain.text', 'normal success');
    });

    it('should display normal warning message', () => {
        bootstrapAlerts.getNormalWarningButton().click();
        bootstrapAlerts.getNormalWarningAlert().should('be.visible');
    });

    it('should display a warning alert message with correct text', () => {
        bootstrapAlerts.getNormalWarningButton().click();
        bootstrapAlerts.getNormalWarningAlert().should('contain.text', 'normal warning');
    });
    it('should display normal danger message', () => {
        bootstrapAlerts.getNormalDangerButton().click();
        bootstrapAlerts.getNormalDangerAlert().should('be.visible');
    });

    it('should display a danger alert message with correct text', () => {
        bootstrapAlerts.getNormalDangerButton().click();
        bootstrapAlerts.getNormalDangerAlert().should('contain.text', 'normal danger');
    });
    it('should display normal info message', () => {
        bootstrapAlerts.getNormalInfoButton().click();
        bootstrapAlerts.getNormalInfoAlert().should('be.visible');
    });

    it('should display a info alert message with correct text', () => {
        bootstrapAlerts.getNormalInfoButton().click();
        bootstrapAlerts.getNormalInfoAlert().should('contain.text', 'normal info');
    });




});
