const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://ems-ten-ochre.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
