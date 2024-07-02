const SelectDropdownList = require('../../support/page_objects/selectDropdownList');

describe('Select Single Dropdown List Tests', () => {
    const selectDropdownList = new SelectDropdownList();

    beforeEach(() => {
        cy.visit('/basic-select-dropdown-demo.html');
    });

    it('should select an option from the dropdown', () => {
        selectDropdownList.getSelectDropdown().select('Wednesday');
        selectDropdownList.getSelectedValue().should('contain.text', 'Day selected :- Wednesday');
    });

    it('should select an option and verify the value', () => {
        selectDropdownList.getSelectDropdown().select('Monday');
        selectDropdownList.getSelectedValue().should('contain.text', 'Day selected :- Monday');
    });
});


describe('Multi Select Dropdown List Tests', () => {
    const selectDropdownList = new SelectDropdownList();

    beforeEach(() => {
        cy.visit('/basic-select-dropdown-demo.html');
    });

    it('should select an option from the multi select dropdown', () => {
        selectDropdownList.getOneMultiSelectDropdown();
        selectDropdownList. getSelectedButton();
        selectDropdownList.getSelValue().should('contain.text', 'First selected option is : Texas');
    });
});
