import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchRepos, GithubState } from '../store/slices/githubReposSlice';
import { State, useAppDispatch } from '../store/store';

const Fetch = () => {
  const dispatch = useAppDispatch();
  const { repositories, isLoading, error } = useSelector<State, GithubState>(state => state.githubRepos);

  useEffect(() => {
    dispatch(fetchRepos('martinkristof'));
  }, [dispatch]);

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <div>
      {repositories.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default Fetch;
