// To know more about ducks, see https://github.com/erikras/ducks-modular-redux

import { Action } from 'redux-actions';
import { RootState } from '../../store';

// State

// To know more about Record type, see https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt
export type ErrorState = Record<string, Error | null>;

// Reducer

export default (state: ErrorState = {}, action: Action<any>): ErrorState => {
  const { type } = action;
  const matches = /(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes:
  //   ['/REQUEST', '/SUCCESS', '/FAILURE']
  if (!matches) return state;

  const [, routineType, status] = matches;

  return {
    ...state,
    // Set error state to the payload only when the status is "FAILURE"
    //    Otherwise set the error state to null
    [routineType]: status === 'FAILURE' ? action.payload : null
  };
};

// Selectors

// Select the whole error state
export const selectErrorState = (state: RootState) => state.domainData.error;

// Select error for a given routine
export const selectError = (routineType: string) => (state: RootState) => {
  return state.domainData.error[routineType];
};
