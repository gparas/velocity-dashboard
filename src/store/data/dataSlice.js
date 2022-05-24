import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import actions from './actions';
import C from './constants';

const dataSlice = createSlice({
  name: C.REDUCER_NAME,
  initialState,
  extraReducers: {
    [actions.fetchData.pending]: state => {
      state[C.PROPS.IS_LOADING] = true;
    },
    [actions.fetchData.fulfilled]: (state, action) => {
      state[C.PROPS.IS_LOADING] = false;
      state[C.PROPS.DATA] = action.payload;
    },
    [actions.fetchData.rejected]: (state, action) => {
      state[C.PROPS.IS_LOADING] = false;
      state[C.PROPS.ERROR] = action.payload;
    },
  },
});

export default dataSlice;
