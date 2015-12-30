import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';
import DevTools from '../DevTools';
import {persistState} from 'redux-devtools';
import rootReducer from './reducer';

function getDebugSessionKey() {
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const finalCreateStore = compose(
  applyMiddleware(
    ThunkMiddleware,
    LoggerMiddleware({
      level: 'info',
      predicate: (state, action) => true
    })
  ),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}