# starter-react
Base project a react app with a demo section of the functionalities.

## Characteristics

- React 16.8.6
- Bootstrap 4.3.1
- Routing: react-router-dom
- i18n: [i18next](https://react.i18next.com/)
- Fake backend: [json-server](https://github.com/typicode/json-server), [faker](https://www.npmjs.com/package/faker)
- Dialog: [material-ui](https://material-ui.com/)
- Block UI: [react-block-ui](https://availity.github.io/react-block-ui/)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run mock:start`

Starts a mock server that contains the static data of the `api/db.json` file.
Open [http://localhost:4000/users](http://localhost:4000/users) to view the results it in the browser.

### `npm run mock:faker`with

Starts a server that contains data automatically generated with the `api/generateData.js` script via faker.js.
Open [http://localhost:4000/users](http://localhost:4000/users) to view the results it in the browser.