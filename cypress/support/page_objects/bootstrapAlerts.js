class BootstrapAlerts {
    getAutocloseableSuccessButton() {
        return cy.get('#autoclosable-btn-success');
    }
    getNormalSuccessButton() {
        return cy.get('#normal-btn-success');
    }
    getNormalSuccessAlert() {
        return cy.get('.alert-normal-success');
    }
    getAutocloseableWarningButton() {
        return cy.get('#autoclosable-btn-warning');
    }
    getNormalWarningButton() {
        return cy.get('#normal-btn-warning');
    }
    getNormalWarningAlert() {
        return cy.get('.alert-normal-warning');
    }
    getAutocloseableDangerButton() {
        return cy.get('#autoclosable-btn-danger');
    }
    getNormalDangerButton() {
        return cy.get('#normal-btn-danger');
        }
    getNormalDangerAlert() {
        return cy.get('.alert-normal-danger');
    }
    getAutocloseableInfoButton() {
        return cy.get('#autoclosable-btn-info');
    }
    getNormalInfoButton() {
        return cy.get('#normal-btn-info');
        }
    getNormalInfoAlert() {
        return cy.get('.alert-normal-info');
    }

}
module.exports = BootstrapAlerts;
