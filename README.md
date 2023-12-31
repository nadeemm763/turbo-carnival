<h1>Internet Heroku - Cypress Automated Testing</h1>


<h3>Description</h3>
Internet Heroku is a web application hosted on Heroku that serves as a testing playground for various web interactions. This repository contains automated test cases for Internet Heroku using Cypress, a popular end-to-end testing framework.

The test suite covers two main scenarios:

<h5>Broken Links:</h5> The test case checks for any broken links present on the Internet Heroku application. It ensures that all links are functional and lead to the expected destinations.

<h5>Uploading a File:</h5> This test case verifies the file upload functionality of the Internet Heroku application. It ensures that users can successfully upload files and receive appropriate feedback.


<h3>Installation</h3>
To run the automated test cases locally on your machine, follow these steps:

Clone the repository to your local machine:
https://github.com/nadeemm763/turbo-carnival.git

Install the required dependencies:
npm install


<h3>Test Execution</h3>
To execute the automated test cases, use the following command:<br>
node_modules/.bin/cypress run --headed --browser chrome

This command will trigger the Cypress test runner, which will open a browser window and run the test suite against the Internet Heroku application.


<h3>Test Report</h3>
The test execution generates a detailed test report using MochaAwesome. This report provides insights into the test results, including the number of tests passed, and failed, and any error messages encountered during the test execution.

Here is the MochaAwesome report
https://64b7a07968eede6276ccdd42--jazzy-cajeta-14e6ad.netlify.app/







