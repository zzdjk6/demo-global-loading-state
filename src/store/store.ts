import { applyMiddleware, combineReducers, createStore } from 'redux';
import loadingReducer from './ui/loading/ducks';
import demoDataReducer from './domain-data/demo-data/ducks';
import errorReducer from './domain-data/error/ducks';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  ui: combineReducers({
    loading: loadingReducer
  }),
  domainData: combineReducers({
    demoData: demoDataReducer,
    error: errorReducer
  })
});

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
  serialize: true
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

const state = store.getState();

export type RootState = typeof state;
