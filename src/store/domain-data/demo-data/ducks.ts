import { Action } from "redux-actions";
import { createThunkRoutine, createThunk } from "redux-thunk-routine";

// State
type State = {};

// Routines
export const routine1 = createThunkRoutine<number>('DEMO_ROUTINE1');
export const routine2 = createThunkRoutine<number>('DEMO_ROUTINE2');
export const routine3 = createThunkRoutine<number>('DEMO_ROUTINE3');

const wait = (ms: number) => new Promise(resolve => setTimeout(() => resolve(), ms));

// Thunks
export const fetchData1 = createThunk(routine1, async (makeError: boolean = false) => {
  await wait(1000);
  if (makeError) {
    throw new Error('Fetch Data1 Error!');
  }
  return 1;
});

export const fetchData2 = createThunk(routine2, async (makeError: boolean = false) => {
  await wait(2000);
  if (makeError) {
    throw new Error('Fetch Data2 Error!');
  }
  return 2;
});

export const fetchData3 = createThunk(routine3, async (makeError: boolean = false) => {
  await wait(3000);
  if (makeError) {
    throw new Error('Fetch Data3 Error!');
  }
  return 3;
});

// Reducer
export default (state: State = {}, action: Action<any>): State => {
  return state;
};
