import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import Cookies from 'universal-cookie';
import Thunk from 'redux-thunk';

import routes from './routes';
import reducers from './reducers/index';
import Async from './middlewares/async';
import config from './config';

// Assumed customerID cookie defaulted to LONDON
const cookies = new Cookies();
cookies.set('customerID', config.customerID);

// Add Async middleware to deal with promises returned by the catalogue service
const createStoreWithMiddleware = applyMiddleware(Async, Thunk)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
      <Router history={ browserHistory } routes={routes} />
  </Provider>
  , document.querySelector('.container'));