import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { store, history } from './configureStore';

ReactDOM.render(
  <Provider store={store}>
      <Router history={history} routes={routes}/>
  </Provider>
  , document.querySelector('.main'));
