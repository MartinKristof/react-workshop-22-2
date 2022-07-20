import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import countSlice from './slices/countSlice';
import tickSlice from './slices/tickSlice';
import githubReposSlice from './slices/githubReposSlice';
import { GithubState } from './slices/githubReposSlice';
import { useDispatch } from 'react-redux';

export type State = {
  counter: any;
  tick: any;
  githubRepos: GithubState;
};

const makeStore = () =>
  configureStore({
    reducer: {
      counter: countSlice,
      tick: tickSlice,
      githubRepos: githubReposSlice,
    },
    devTools: true,
  });

type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
