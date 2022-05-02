import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import C from './constants';

const navigationSlice = createSlice({
  name: C.REDUCER_NAME,
  initialState,
  reducers: {
    toggleOpen: state => {
      state[C.PROPS.NAVIGATION_IS_OPEN] = !state[C.PROPS.NAVIGATION_IS_OPEN];
    },
  },
});

export const { toggleOpen } = navigationSlice.actions;

export default navigationSlice.reducer;
