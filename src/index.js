import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles.css';
import './index.css';
import './i18n';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Demo from './demo/Demo';
import NotFound from './NotFound';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/demo" component={Demo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
