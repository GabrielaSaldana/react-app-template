# WebApp

## Table of Contents

- [1. Requirements](#1-requirements)
- [2. Quick Start](#2-quick-start)
  - [a. Building the Project](#a-building-the-project)
  - [b. Running on Dev Mode](#b-running-on-dev-mode)
- [3. Tools](#3-tools)
- [4. Quality Procedures](#4-quality-procedures)
  - [a. Git](#a-git)
  - [b. Code Style](#b-code-style)
  - [c. Adding new Dependencies](#c-adding-new-dependencies)
  - [d. Testing](#d-testing)
- [5. Deployment](#5-deployment)

## 1. Requirements

 We recommend to use the Node Version Manager (NVM) to manage Node versions, we work with the LTS version, you can find the LTS version here: https://github.com/nodejs/Release#release-schedule

##### Installation
Mac users, use brew:
    1. Use the command `brew install nvm`.
    2. To install a NodeJs version use the command `nvm install`, NVM will use the Node version as specified in the .nvmrc .
    3. Activate the node version with: `nvm use`. This action should be done on every new session of the console.

## 2. Quick Start

## a. Environment files
1. `create-react-app` already has support to read .env* files. So no need to add packages to handle that.
2. Create a `.env.[development|production]` file inside root directory using the `.env.sample` template, **ask for your keys and add them** Without those files you won't be able to have a fully working development environment and won't be able to build for production.
3. Every environment variable set in those files need to have the preffix **REACT_APP_** or it wont be read by the scripts. This is to prevent variables undesired exposure.

### b. Building the Project
1. Install the third party dependencies. Use the command `npm install`.

2. Generate the bundles. Use the command `npm run build`.

### c. Running on Dev Mode

When running on dev mode, changes in the *js* and the *style* sources are immediately reflected in the browser.

Features related to locales are limited with the webpack server.

To run the project on dev mode:

1. Run the WebPack Development Server. Use the command `npm start`.

2. Open the Index page.

    * Visit http://localhost:3000

## 3. Tools

Some popular editors for developing with JS include [Atom](https://atom.io/) and [Visual Studio Code](https://code.visualstudio.com/download). Depending on the editor of your choose, it is recommended to install ES6+ and SASS/LESS language support plugins.

## 4. Quality Procedures

**All code quality procedures must pass for every new contribution.**

### a. Git

Contributors should adhere to the git practices conveyed in [The Wizeline Contributing Guidelines](https://github.com/wizeline/wize-docs/blob/master/development/git-contributing-guidelines.md)

### b. Code Style

We use the following testing tools:

* [ESLint](https://eslint.org/docs/about/) to assure our coding adheres to some style guide. In the [.eslintrc.json](.eslintrc) configuration, we extend the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and we aggregate some other rules and exceptions.

Every change in the code requires passing tests. To verify this requirement:

1. Run the linting test. Use the command `npm run lint`

#### Theming

We're using [Semantic-UI Framework]() for creating the components layout.
Refer to official components documentation and usage for better understanding.

### c. Adding new Dependencies

We use [NPM](http://npmjs.com/) to manage dependencies.
Dependencies are listed in the [package.json](package.json) spec.

* When proposing new dependencies, the popularity, antiquity and pulse should be considered. When possible, provide a comparison of at least two options.

* Dependencies should be added in the `devDependencies` section as general rule. This helps having a more optimal bundles for deployments.

* Dependencies should be added with the major and minor version (ie v1.2 rather than v1.2.3^). In the long run, this will ensure incompatible changes in the 3rd parties wont break the project.

### d. Testing

We use [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to manage unit testing.

* For Jest configuration use the `jest.config.js` file.
* Any test setup that has to be done before running jest must go inside `jest.setup.js`.
* Enzyme's adapter configuration and the jsdom virtual enviroment configuration goes inside `jest.setup.js`.

Change in the code requires passing tests. To verify this requirement:

1. Run the tests cases to see the coverage table. Use the command `npm run test`.

## 5. Deploymnet

