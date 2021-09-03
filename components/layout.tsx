import Head from 'next/head';
import React from 'react';

/* components */
import Footer from './footer';
import Header from './header';

/* types */
import { LayoutType } from '../types/Layout';

const Layout = ({ children, lightTheme }: LayoutType) => (
  <div>
    <Head>
      <title>Beedev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header theme={lightTheme} />
    {children}
    <Footer />
  </div>
);

export default Layout;
