import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';
import { defineConfig } from "cypress";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    }),
  );

  // eslint-disable-next-line no-param-reassign
  config.env = {
    ...process.env, // add all process env var here
    ...config.env, // plus any command line overrides
  };

  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://nozzmo.com',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    configFile: 'cypress-reporter-config.json',
  },
  retries: 1,
  screenshotOnRunFailure: true,
  video: true,
  videoCompression: 15,
  viewportHeight: 1200,
  viewportWidth: 1600,
});
