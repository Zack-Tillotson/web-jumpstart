import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';
import rootReducer from './reducer';

const finalCreateStore = compose(
  applyMiddleware(
    ThunkMiddleware,
    LoggerMiddleware({
      level: 'info',
      predicate: (state, action) => true
    })
  )
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