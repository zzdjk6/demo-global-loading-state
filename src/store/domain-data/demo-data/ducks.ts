import { Action } from "redux-actions";
import { createThunkRoutine } from "redux-thunk-routine";
import { Dispatch } from "redux";

// State
type State = {};

// Routines
export const routine1 = createThunkRoutine<number, Error>("DEMO_ROUTINE1");
export const routine2 = createThunkRoutine<number, Error>("DEMO_ROUTINE2");
export const routine3 = createThunkRoutine<number, Error>("DEMO_ROUTINE3");

// Actions
export const fetchData1 = () => async (dispatch: Dispatch) => {
  dispatch(routine1.request());
  try {
    setTimeout(() => {
      dispatch(routine1.success(1));
    }, 1000);
  } catch (e) {
    dispatch(routine1.failure(e));
    throw e;
  }
};

export const fetchData2 = () => async (dispatch: Dispatch) => {
  dispatch(routine2.request());
  try {
    setTimeout(() => {
      dispatch(routine2.success(2));
    }, 2000);
  } catch (e) {
    dispatch(routine2.failure(e));
    throw e;
  }
};

export const fetchData3 = () => async (dispatch: Dispatch) => {
  dispatch(routine3.request());
  try {
    setTimeout(() => {
      dispatch(routine3.success(3));
    }, 3000);
  } catch (e) {
    dispatch(routine3.failure(e));
    throw e;
  }
};

// Reducer
export default (state: State = {}, action: Action<any>): State => {
  return state;
};
