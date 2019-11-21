// To know more about ducks, see https://github.com/erikras/ducks-modular-redux

import { Action } from 'redux-actions';
import { RootState } from '../../store';
import { createSelector } from 'reselect';

// State

// To know more about Record type, see https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt
export type LoadingState = Record<string, boolean>;

// Reducer

export default (state: LoadingState = {}, action: Action<any>): LoadingState => {
  const { type } = action;
  const matches = /(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes:
  //   ['/REQUEST', '/SUCCESS', '/FAILURE']
  if (!matches) return state;

  const [, routineType, status] = matches;
  return {
    ...state,
    // Set loading state to true only when the status is "REQUEST"
    //    Otherwise set the loading state to false
    [routineType]: status === 'REQUEST'
  };
};

// Selectors

// Select the whole loading state object
export const selectLoadingState = (state: RootState) => state.ui.loading;

// Select whether a given routine is loading
export const selectLoading = (routineType: string) => {
  return createSelector([selectLoadingState], (state: LoadingState) => {
    return !!state[routineType];
  });
};

// Select whether any routine is loading
export const selectAnyLoading = createSelector([selectLoadingState], (state: LoadingState) => {
  return Object.values(state).some(val => val);
});

// Select whether a given set of routines are loading
export const selectSomeLoading = (routineTypes: Array<string>) => {
  return createSelector([selectLoadingState], (state: LoadingState) => {
    return routineTypes.some(routineType => state[routineType]);
  });
};
