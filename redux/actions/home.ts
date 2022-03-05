import {createAction} from '~/utils/redux';
import * as HOME_DEFINES from '../defines/home';
import type {State} from '../reducers';

export const DEFINES = HOME_DEFINES;

export const setCounter = createAction<[
  number
], State, number>(
  HOME_DEFINES.COUNTER_INC,
  (counter) => counter,
)
