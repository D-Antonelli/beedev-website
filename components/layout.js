import Head from 'next/head';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, theme }) => (
  <div>
    <Head>
      <title>Beedev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header theme={theme} />
    {children}
    <Footer />
  </div>
);

export default Layout;
