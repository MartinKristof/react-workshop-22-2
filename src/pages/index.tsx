import type { NextPage } from 'next';
import Fetch from '../components/Fetch';
import styles from '../../styles/Home.module.css';
import { wrapper } from '../store/store';
import { fetchRepos } from '../store/slices/githubReposSlice';
import { ItemsTable } from '../components/RenderProps';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Fetch />
        <ItemsTable />
      </main>

      <footer className={styles.footer}>React Workshop</footer>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchRepos('martinkristof'));

  return {
    props: {},
  };
});

export default Home;
