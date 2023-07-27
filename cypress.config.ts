import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    baseUrl: 'https://weathershopper.pythonanywhere.com/',
  },
})
