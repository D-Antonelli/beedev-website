import Head from 'next/head';
import Footer from './footer';
import Header from './header';

type PropsType = {
  children: any;
  lightTheme?: boolean;
};

const Layout = ({ children, lightTheme }: PropsType) => (
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
