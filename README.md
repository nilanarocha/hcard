> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[hCard is a simple, open format for publishing people, companies and
organizations on the web](http://microformats.org/wiki/hCard).

## Packages

- ReactJS;
- Prettier as a opinionated code formatter;
- Jest as test framework;
- EmotionJS as a CSS-in-JS solution for component styles;
- Create React App as a zero-config application bootstrap;

## Code structure

```
src/
  components/
  pages/
  styled.js

```

### `components/`

Folder with all reusible components.

### `pages/`

Folder with page level components.

### `styled.js`

File with all styled components. All these components are using EmotionJS as a CSS-in-JS solution.

## Setup

> Please make sure you are using nodeJS version as specified in .nvmrc file.

First, install the node version as specified in .nvmrc file

```
nvm install
nvm use
```

After that, run the command to install all the required packages.

```
npm install
```

## Available Scripts commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Author

_Nilana Rocha (nilanarocha)_

- <http://github.com/nilanarocha>
