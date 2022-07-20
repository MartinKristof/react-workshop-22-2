import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/globals.css';
import { wrapper } from '../store/store';
import Layout from '../components/Layout';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default wrapper.withRedux(WrappedApp);
