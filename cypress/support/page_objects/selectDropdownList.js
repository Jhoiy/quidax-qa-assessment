class SelectDropdownList {
    getSelectDropdown() {
        return cy.get('select#select-demo');
    }
    getSelectedValue() {
        return cy.get('.selected-value');
    }
    getOneMultiSelectDropdown() {
        return  cy.get('[value="Texas"]').click();
    }
    getSelectedButton() {
        return cy.get('#printMe').click();
    }
    getSelValue() {
        return cy.get('.getall-selected');
    }


}

module.exports = SelectDropdownList;
 