import { Dispatch } from 'redux';
import { Action } from 'redux-actions';
import { createThunkRoutine, dispatchRoutine } from 'redux-thunk-routine';

// State
type State = {};

// Routines
export const routine1 = createThunkRoutine<number>('DEMO_ROUTINE1');
export const routine2 = createThunkRoutine<number>('DEMO_ROUTINE2');
export const routine3 = createThunkRoutine<number>('DEMO_ROUTINE3');

const wait = (ms: number) => new Promise(resolve => setTimeout(() => resolve(), ms));

// Actions
export const fetchData1 = (makeError: boolean = false) => async (dispatch: Dispatch) => {
  return await dispatchRoutine(dispatch, routine1, async () => {
    await wait(1000);
    if (makeError) {
      throw new Error('Fetch Data1 Error!');
    }
    return 1;
  });
};

export const fetchData2 = (makeError: boolean = false) => async (dispatch: Dispatch) => {
  return await dispatchRoutine(dispatch, routine2, async () => {
    await wait(2000);
    if (makeError) {
      throw new Error('Fetch Data2 Error!');
    }
    return 2;
  });
};

export const fetchData3 = (makeError: boolean = false) => async (dispatch: Dispatch) => {
  return await dispatchRoutine(dispatch, routine3, async () => {
    await wait(3000);
    if (makeError) {
      throw new Error('Fetch Data3 Error!');
    }
    return 3;
  });
};

// Reducer
export default (state: State = {}, action: Action<any>): State => {
  return state;
};
