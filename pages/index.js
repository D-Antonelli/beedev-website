import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';
import Main from '../components/main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main/>
      <footer className={styles.footer}></footer>
    </div>
  );
}
