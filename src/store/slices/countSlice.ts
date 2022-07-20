import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCount(state) {
      state.count++;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload: { counter } }) => ({
      ...state,
      ...counter,
    }),
  },
});

export const { addCount } = counterSlice.actions;
export default counterSlice.reducer;
