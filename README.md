# UI Test Automation Framework based on Cypress

### Supported Browsers

- Chrome
- Electron
- Chromium
- Edge
- Canary
- Firefox

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

If you don't have any of those tools installed please follow the step below:

- Simply run `brew install node` command in your Terminal of choice

You can verify successful installation by running the following commands:

```bash
node -v
npm -v
```

### Setup

- Clone/extract the project contents to your local directory.
- Navigate to the local project folder location and run the below command on the terminal to install Node package manager:
  `npm install`
- Next run the below command to install Cypress with Typescript:
  `npm install cypress typescript --save-dev`

## Tools

- [Cypress](https://www.cypress.io/): Test Automation Framework
- [Nanoid](https://github.com/ai/nanoid): Unique string ID generator for Javascript


## Repository Structure

```text
|- cypress 
|   |- downloads
|   |- e2e
|   |    |- pages     // Page class files with corresponding classes and their methods used in the tests.
|   |    |- tests     // Contains the E2E test files.
|   |- screenshots    // Screenshots are saved here for test run errors.
|   |- support        // Default Cypress folder.
|   |- videos         // Screenshots are saved here for test run errors.
|- node_modules       // Node.js library contents populated upon npm install.
|- cypress.config.ts  // Cypress configuration file.
|- package.json       // Contains project version info, scripts, dependencies etc.
|- tsconfig.json      // Contains Typescript config for the project.
```



## Running Tests

Navigate to the project root directory and follow the steps below:

In order to run the tests in the default Electron browser in headless mode please use the following command:

```bash
npx cypress run
```

Run tests in headed mode with a browser specified. e.g.

```bash
npx cypress run --browser chrome --headed
```

Alternatively, the below command can be used for a headed run on Chrome browser, based on script configured in package.json file:

```bash
npm run test:chrome
```

If you wish to use the Cypress UI runner, run this command:
```bash
npm run cypress:open 
```
When the UI window opens up, click "E2E Testing" >> select a browser >> click the Start button >> select the test spec to initiate test run.

By default Cypress runner prints a report after each test run. In case of errors, screenshots and videos are saved in the respected folders.