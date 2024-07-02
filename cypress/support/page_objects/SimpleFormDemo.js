class SimpleFormDemo {
  getSingleInputField() {
      return cy.get('input[id="user-message"]');
  }
  getShowMessageButton() {
      return cy.get('button[onclick="showInput();"]');
  }
  getDisplayedMessage() {
      return cy.get('#display');
  }
  getFirstInputField() {
    return cy.get('#value1');
  }
  getSecondInputField() {
    return cy.get('#value2');
  }
  getGetTotalButton() {
    return cy.get('#gettotal > .btn');
  }
  getTotalSum() {
    return cy.get('[style="height: 50px; width: 100%;"]');

}

}
module.exports = SimpleFormDemo;
