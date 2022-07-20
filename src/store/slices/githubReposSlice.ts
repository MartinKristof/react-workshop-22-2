import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type Data = { name: string }[];

export const fetchRepos = createAsyncThunk<Data, string>('github/fetchRepos', async username => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data: Data = await response.json();

    return data.map(({ name }) => ({ name }));
  } catch (error) {
    return [];
  }
});

export type GithubState = {
  repositories: any[];
  error: any;
  isLoading: boolean;
};

const initialState = {
  repositories: [],
  error: null,
  isLoading: false,
};

export const githubSlice = createSlice({
  name: 'githubRepos',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, { payload: { githubRepos } }) => ({
      ...state,
      ...githubRepos,
    }),
    [fetchRepos.fulfilled.type]: (state: GithubState, action: AnyAction) => {
      state.repositories = action.payload;
      state.isLoading = !state.isLoading;
    },
    [fetchRepos.rejected.type]: (state: GithubState, action: AnyAction) => {
      state.error = action.error;
    },
    [fetchRepos.pending.type]: (state: GithubState) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export default githubSlice.reducer;
