import { defineConfig } from "cypress";
import { execSync } from "child_process";
import waitOn from "wait-on"

// Dynamically import tsconfig-paths
(async () => {
  const tsconfigPaths = await import('tsconfig-paths');

  // Register tsconfig-paths only if using path aliases
  tsconfigPaths.register({
    baseUrl: '.',
    paths: {
      '@support/*': ['cypress/support/*'],
      '@e2e/*': ['cypress/e2e/*'],
      '@fixtures/*': ['cypress/fixtures/*'],
    },
  });
})();

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      on('before:run', async () => {
        console.log('Starting Kong Gateway with docker-compose...');
        try {
          execSync('cd docker && docker-compose up -d', {stdio: 'inherit'});
          await waitOn({
            resources: ['http://localhost:8002'],
            timeout: 30000,
          });
          console.log('Server is up and running at http://localhost:8002!');
        } catch (error) {
          console.error('Failed to start Docker containers:', error);
          process.exit(1);
        }
      });

      on('after:run', () => {
        console.log('Shutting down Kong Gateway with docker-compose...');
        try {
          execSync('cd docker && docker-compose down', {stdio: 'inherit'});
        } catch (error) {
          console.error('Failed to stop Docker containers:', error);
        }
      });
    },
  },
  video: false,
  screenshotOnRunFailure: true,
});
