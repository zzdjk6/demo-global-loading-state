import { Action } from 'redux-actions';
import { createThunkRoutine, ReduxThunkRoutine, dispatchRoutine } from 'redux-thunk-routine';
import { Dispatch } from 'redux';

// State
type State = {};

// Routines
export const routine1 = createThunkRoutine<number>('DEMO_ROUTINE1');
export const routine2 = createThunkRoutine<number>('DEMO_ROUTINE2');
export const routine3 = createThunkRoutine<number>('DEMO_ROUTINE3');

const wait = (ms: number) => new Promise(resolve => setTimeout(() => resolve(), ms));

// Actions
export const fetchData1 = () => async (dispatch: Dispatch) => {
  return await dispatchRoutine(dispatch, routine1, async () => {
    await wait(1000);
    return 1;
  });
};

export const fetchData2 = () => async (dispatch: Dispatch) => {
  return await dispatchRoutine(dispatch, routine2, async () => {
    await wait(2000);
    return 2;
  });
};

export const fetchData3 = () => async (dispatch: Dispatch) => {
  return await dispatchRoutine(dispatch, routine3, async () => {
    await wait(3000);
    return 3;
  });
};

// Reducer
export default (state: State = {}, action: Action<any>): State => {
  return state;
};
