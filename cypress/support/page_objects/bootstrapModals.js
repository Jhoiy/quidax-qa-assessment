class BootstrapModals {
    getLaunchSingleModalButton() {
        return cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]');
    }
    getSingleModalTitle() {
        return cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-header > .modal-title');
    }
    getCloseSingleModalButton() {
        return cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-header > .close');
    }

    getLaunchFirstMultipleModalButton() {
    return cy.get('[href="#myModal"]');
    }
    getFirstMultipleModalTitle() {
    return cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title');
    }
    getCloseFirstMultipleModalButton() {
    return cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .close');
    }

    getLaunchSecondMultipleModalButton() {
        return cy.get('.modal-body > .btn');
    }
    getSecondMultipleModalTitle() {
        return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header');
    }
    getCloseSecondMultipleModalButton() {
        return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .close');
    }

}

module.exports = BootstrapModals;
