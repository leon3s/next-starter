import type {ReducerAction} from '~/utils/redux';
import type {ReducerHooks} from '~/utils/reducer';
import { createReducer } from '~/utils/reducer';

import {
  DEFINES,
  setCounter,
} from '../actions/home';

export type HomeState = {
  counter: number;
};

const initialState: HomeState = {
  counter: 0,
};

const reducerHooks: ReducerHooks<HomeState> = {
  [DEFINES.COUNTER_INC.DEFAULT]:
    (state, action: ReducerAction<typeof setCounter>) => ({
      ...state,
      counter: action.payload,
    }),
};

const reducer = createReducer<HomeState>(initialState, reducerHooks);

export default reducer;
