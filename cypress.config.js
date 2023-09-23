const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: "4ph3j7",
  video: true,
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
