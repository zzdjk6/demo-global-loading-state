import { Action } from 'redux-actions';
import { createThunkRoutine, getThunkActionCreator } from 'redux-thunk-routine';

// State
type State = {};

// Routines
export const routineA = createThunkRoutine<number>('DATA/A/FETCH');
export const routineB = createThunkRoutine<number>('DATA/B/FETCH');

const wait = (ms: number) => new Promise(resolve => setTimeout(() => resolve(), ms));

// Thunks
export const fetchDataA = getThunkActionCreator(routineA, async (makeError: boolean = false) => {
  await wait(1500);
  if (makeError) {
    throw new Error('Fetch Data A Error!');
  }
  return 1;
});

export const fetchDataB = getThunkActionCreator(routineB, async (makeError: boolean = false) => {
  await wait(3000);
  if (makeError) {
    throw new Error('Fetch Data B Error!');
  }
  return 2;
});

// Reducer
export default (state: State = {}, action: Action<any>): State => {
  return state;
};
