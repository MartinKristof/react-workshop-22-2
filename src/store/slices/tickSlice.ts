import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  lastUpdate: 0,
  light: false,
};

export const tickSlice = createSlice({
  name: 'tick',
  initialState,
  reducers: {
    tick(state, { payload: { ts, light } }) {
      return { ...state, lastUpdate: ts, light: !!light };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload: { tick } }) => ({
      ...state,
      ...tick,
    }),
  },
});

export const { tick } = tickSlice.actions;

const serverRenderClock = (isServer: boolean) => (dispatch: Function) =>
  dispatch(
    tick({
      light: !isServer,
      ts: Date.now(),
    }),
  );

const startClock = () => (dispatch: Function) =>
  setInterval(() => dispatch(tick({ light: true, ts: Date.now() })), 1000);

export { serverRenderClock, startClock };

export default tickSlice.reducer;
