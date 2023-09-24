const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.PROJECT_ID,
  video: true,
  reporter: 'mochawesome',
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
    },
  },
});
