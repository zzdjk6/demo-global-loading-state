import { Action } from 'redux-actions';
import { createThunkRoutine, getThunkActionCreator } from 'redux-thunk-routine';

// State
type State = {};

// Routines
export const routineA = createThunkRoutine<number>('DATA/A/FETCH');
export const routineB = createThunkRoutine<number>('DATA/B/FETCH');
export const routineC = createThunkRoutine<number>('DATA/C/FETCH');

const wait = (ms: number) => new Promise(resolve => setTimeout(() => resolve(), ms));

const fakeFetchData = async (args: { makeError: boolean; waitSeconds: number; name: string }) => {
  await wait(args.waitSeconds * 1000);
  if (args.makeError) {
    throw new Error(`Fetch Data ${args.name} Error!`);
  }
  return args.waitSeconds;
};

// Thunks
export const fetchDataA = getThunkActionCreator(routineA, async (makeError: boolean = false) => {
  return fakeFetchData({
    makeError,
    waitSeconds: 1.5,
    name: 'A'
  });
});

export const fetchDataB = getThunkActionCreator(routineB, async (makeError: boolean = false) => {
  return fakeFetchData({
    makeError,
    waitSeconds: 1.5,
    name: 'B'
  });
});

export const fetchDataC = getThunkActionCreator(routineC, async (makeError: boolean = false) => {
  return fakeFetchData({
    makeError,
    waitSeconds: 1.5,
    name: 'C'
  });
});

// Reducer
export default (state: State = {}, action: Action<any>): State => {
  return state;
};
