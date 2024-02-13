const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    supportFile: false,
    setupNodeEvents: (on) => {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/features/**/*.{feature,features}',
  }
});
