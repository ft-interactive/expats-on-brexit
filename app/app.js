/* global ga */

import 'babel-polyfill';
import './modernizr';

// webpack's crazy way of making css happen
import './sass/main.scss';


import ctm from './ctm';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';
import basePath from './basePath';

import { selectLocationState } from 'components/App/selectors';
import App from 'components/App';
import createRoutes from './routes';


if (ctm) {
console.log('CTM');



const browserHistory = useRouterHistory(createHistory)({
  basename: basePath,
});

const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

history.listen((...args) => {
  console.log('location.pathname', location.pathname);
  console.log('args', args);

  ga('set', 'page', location.pathname);
  ga('send', 'pageview');

  console.log('pageview sent');
});

// Set up the router, wrapping all Routes in the App component

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(
          useScroll(
            (prevProps, props) => {
              if (!prevProps || !props) {
                return true;
              }

              if (prevProps.location.pathname !== props.location.pathname) {
                return [0, 0];
              }

              return true;
            }
          )
        )
      }
    />
  </Provider>,
  document.getElementById('app')
);

// // Install ServiceWorker and AppCache in the end since
// // it's not most important operation and if main code fails,
// // we do not want it installed
// import { install } from 'offline-plugin/runtime';
// install();


} else {
  console.log('NOT CTM');
}