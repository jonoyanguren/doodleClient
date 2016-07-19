import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { applyMiddleware, compose, createStore } from "redux";
import createLogger from "redux-logger";
import promise from 'redux-promise';
import promiseMiddleware from "redux-promise-middleware";
import reducers from './reducers';

const logger = createLogger();

const middleware = [
    promiseMiddleware(),
    promise,
    logger
];

// Set var for all the middleware + redux chrome extension
const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store with the (reducer, initialState, compose)
export const store = createStore(
    reducers,
    enhancers
);

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);

// Make the hot reload work with Redux
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/').default;
    store.replaceReducer(nextRootReducer);
  });
}
