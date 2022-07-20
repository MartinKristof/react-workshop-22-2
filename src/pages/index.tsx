import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Fetch from '../components/Fetch';
import styles from '../../styles/Home.module.css';
import { wrapper } from '../store/store';
import { fetchRepos } from '../store/slices/githubReposSlice';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Fetch />
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
