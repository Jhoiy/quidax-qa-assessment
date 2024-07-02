# Quidax QA Task Assessment
```This repository contains the automation framework for the Quidax QA Task Assessment. The framework is built using Cypress and follows the Page Object Model (POM) approach. The tests cover functional testing for various forms and scenarios on the Selenium Easy Demo site.```

## Prerequisites
Node.js (v14.17.0 or later)
npm (v7.19.1 or later)
Git

## Setup
**Clone the repository**:
git clone <your-repository-url>
cd quidax-qa-assessment

## Install dependencies:
npm install

# Using Cypress Test Runner
## Open Cypress Test Runner:

npx cypress open

Run Tests:
Select the test file you want to run from the Cypress Test Runner interface.
# Running Tests in Headless Mode
## Run all tests:
npx cypress run

## Project Structure

quidax-qa-assessment/
├── cypress/
│   ├── e2e/
│   │   ├── input-forms/
│   │   │   ├── simple-form-demo.cy.js
│   │   │   ├── select-dropdown-list.cy.js
│   │   ├── alerts-and-modals/
│   │   │   ├── bootstrap-alerts.cy.js
│   │   │   ├── bootstrap-modals.cy.js
│   ├── fixtures/
│   │   └── example.json
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── page_objects/
│   │   │   ├── simpleFormDemo.js
│   │   │   ├── selectDropdownList.js
│   │   │   ├── bootstrapAlerts.js
│   │   │   ├── bootstrapModals.js
├── cypress.config.js
├── package.json
├── README.md


cypress/fixtures/: ``Contains test data files.``
cypress/support/page_objects/: ``Contains Page Object Model (POM) classes.``
cypress/plugins/: ``Contains plugins configuration.``
cypress.config.js: ``Cypress configuration file.``
package.json: ``npm configuration file.``


## Notes
## Prerequisites
``Ensure you have Node.js and npm installed.``
``Ensure the application under test is accessible at https://demo.seleniumeasy.com``
## Observations
``All test cases are implemented as described in the manual test cases document.``
``Page Object Model (POM) approach is used for better maintainability and reusability of code.``
``Observations on application behavior have been documented in the respective test case files.``

## Blockers
None identified at the moment.
## Author
**Joy Ubaru**

