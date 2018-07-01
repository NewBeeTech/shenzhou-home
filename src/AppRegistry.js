import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import './index.css';
import './assets/stylesheet/animate.css';
import 'antd/dist/antd.min.css';

import routes from './routes';
import store from './store';
import { history } from './store';

const rootElement = document.getElementById('root');

export function AppRegistry() {
  render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    rootElement
  );
}
