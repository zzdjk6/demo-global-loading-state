import { Action } from 'redux-actions';
import { RootState } from '../../store';
import { createSelector } from 'reselect';

// State
export type ErrorState = {
  [key: string]: Error | null;
};

// Reducer
export default (state: ErrorState = {}, action: Action<any>): ErrorState => {
  const { type } = action;
  const matches = /(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes: ['/REQUEST', '/SUCCESS', '/FAILURE']
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
export const selectGlobalErrorState = (state: RootState) => state.domainData.error;

export const selectError = (routineType: string) =>
  createSelector([selectGlobalErrorState], (state: ErrorState) => {
    return state[routineType];
  });
