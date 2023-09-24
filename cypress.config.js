const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'mochawesome',
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
    },
  },
});
