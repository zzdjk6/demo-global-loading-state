import { applyMiddleware, combineReducers, createStore } from "redux";
import loadingReducer from "./ui/loading/ducks";
import demoDataReducer from "./domain-data/demo-data/ducks";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ui: combineReducers({
    loading: loadingReducer
  }),
  domainData: combineReducers({
    demoData: demoDataReducer
  })
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

const state = store.getState();

export type RootState = typeof state;
