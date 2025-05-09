import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    video: false,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'src/components/**/*.cy.{ts,tsx}', 
    supportFile: 'cypress/support/component.ts',
  },
});