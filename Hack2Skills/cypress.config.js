
const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script //will be stored as specPattern
    specPattern: 'cypress/Integration/Hack2skill/*.js',
  },
  chromeWebSecurity: false
});




