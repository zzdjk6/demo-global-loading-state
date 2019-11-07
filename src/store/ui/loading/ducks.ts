import { Action } from "redux-actions";
import { RootState } from "../../store";
import { createSelector } from "reselect";

// State
export type LoadingState = {
  [key: string]: boolean;
};

// Reducer
export default (
  state: LoadingState = {},
  action: Action<any>
): LoadingState => {
  const { type } = action;
  const matches = /(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes: ['/REQUEST', '/SUCCESS', '/FAILURE']
  if (!matches) return state;

  const [, routineType, status] = matches;
  return {
    ...state,
    // Set loading state to true only when the status is "REQUEST"
    //    Otherwise set the loading state to false
    [routineType]: status === "REQUEST"
  };
};

// Selectors
export const selectLoadingState = (state: RootState) => state.ui.loading;

export const selectLoading = (routineType: string) =>
  createSelector(
    [selectLoadingState],
    (state: LoadingState) => {
      return !!state[routineType];
    }
  );

export const selectAnyLoading = createSelector(
  [selectLoadingState],
  (state: LoadingState) => {
    return Object.values(state).some(val => val);
  }
);

export const selectSomeLoading = (routineTypes: Array<string>) =>
  createSelector(
    [selectLoadingState],
    (state: LoadingState) => {
      return routineTypes.some(routineType => state[routineType]);
    }
  );
