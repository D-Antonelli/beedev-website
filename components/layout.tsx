import Head from 'next/head';
import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({
  children,
  lightTheme,
}: {
  children: React.ReactNode;
  lightTheme?: boolean;
}) => (
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
