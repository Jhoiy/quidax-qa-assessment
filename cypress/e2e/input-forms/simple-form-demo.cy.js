const SimpleFormDemo = require('../../support/page_objects/simpleFormDemo');

describe('Simple Form Demo Tests For Single Input Field', () => {
    const simpleFormDemo = new SimpleFormDemo();

    beforeEach(() => {
        cy.visit('/basic-first-form-demo.html');
    });

    it('should display entered message', () => {
        const message = 'Hello, Quidax!';
        simpleFormDemo.getSingleInputField().type(message);
        simpleFormDemo.getShowMessageButton().click();
        simpleFormDemo.getDisplayedMessage().should('have.text', message);
    });

    it('should display special characters', () => {
        const message = '*&@!~`#^';
        simpleFormDemo.getSingleInputField().type(message);
        simpleFormDemo.getShowMessageButton().click();
        simpleFormDemo.getDisplayedMessage().should('have.text', message);
    });

    it('should handle empty input', () => {
        simpleFormDemo.getShowMessageButton().click();
        simpleFormDemo.getDisplayedMessage().should('have.text', '');
    });
});


describe('Simple Form Demo Tests For Two Input Fields', () => {
    const simpleFormDemo = new SimpleFormDemo();
    beforeEach(() => {
        cy.visit('/basic-first-form-demo.html');
    });

    it('should display sum of positive numbers', () => {
        let a, b;
        cy.generateRandomPositiveNumber().then(num => {
            a = num;
        });
        cy.generateRandomPositiveNumber().then(num => {
            b = num;
        });
        cy.then(() => {
            simpleFormDemo.getFirstInputField().type(a.toString());
            simpleFormDemo.getSecondInputField().type(b.toString());
            simpleFormDemo.getGetTotalButton().click();
            simpleFormDemo.getTotalSum().invoke('text').then((text) => {
                const total = parseInt(text.match(/\d+/)[0], 10); // Extract and convert number
                expect(total).to.equal(a + b);
            });
        });
    });
    

    it('should display sum of negative numbers', () => {
        let a, b;
        cy.generateRandomNegativeNumber().then(num => {
            a = num;
        });
    
        cy.generateRandomNegativeNumber().then(num => {
            b = num;
        });
        cy.then(() => {
            simpleFormDemo.getFirstInputField().type(a.toString());
            simpleFormDemo.getSecondInputField().type(b.toString());
            simpleFormDemo.getGetTotalButton().click();
            simpleFormDemo.getTotalSum().invoke('text').then((text) => {
                const total = parseInt(text.match(/-?\d+/)[0], 10); // Extract and convert number, handling negative numbers
                expect(total).to.equal(a + b);
            });
        });
    });

    
    it('should display sum of 0s', () => {
        let a = 0;
        let b = 0;
            simpleFormDemo.getFirstInputField().type(a.toString());
            simpleFormDemo.getSecondInputField().type(b.toString());
            simpleFormDemo.getGetTotalButton().click();
            simpleFormDemo.getTotalSum().invoke('text').then((text) => {
                const result = text.match(/-?\d+/)[0]; // Extract the number from the text
                expect(result).to.equal((a + b).toString());
            });
     
    });
    
    
      

    });

