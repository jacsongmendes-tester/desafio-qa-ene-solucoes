const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 20000,
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  numTestsKeptInMemory: 0,
  waitForAnimations: true,
  experimentalInteractiveRunEvents : true,    
  e2e: {
    baseUrl:'https://enesolucoes.com.br',
    specPattern: 'cypress/e2e/**/*.feature',
    experimentalRunAllSpecs : true,
    setupNodeEvents,
  }
})