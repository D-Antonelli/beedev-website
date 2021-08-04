import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className="hero">
          <div className={styles.heroContainer}>
            <div className={styles.heroLeft}>
              <h1 className={styles.mainTitle}>welcome to the blogging website</h1>
              <p className={styles.secondaryTitle}>
                this website is powered by next js on the frontend, wordpress
                cms in the backend.
              </p>
              <Link href="/blog" passHref>
                <button className={styles.cta}>read all blogs</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
