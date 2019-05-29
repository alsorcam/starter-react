import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.css';
import './index.css';
import './shared/services/i18n';
import * as serviceWorker from './serviceWorker';
import { modalStore } from './redux/modal.store';

import App from './App';
import Demo from './demo/Demo';
import NotFound from './NotFound';

const routing = (
  <Provider store={modalStore}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/demo" component={Demo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
