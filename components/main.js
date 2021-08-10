import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Hero from './hero';

const Main = () => {
  return (
    <main className={styles.main}>
    <Hero/>
      <section className={styles.articlesSection}>
        <div className={styles.articlesContainer}>
          <h1 className={styles.articleTitle}>latest articles</h1>
          <div className={styles.articles}>
            <div className={styles.article}>
              <img
                src="/images/article-img.png"
                alt="article"
                className={styles.articleThumb}
              />
              <h2 className={styles.articleContent}>
                Here are some things you should know regarding how we work{' '}
              </h2>
            </div>
            <div className={styles.article}>
              {' '}
              <div className={styles.article}>
                <img
                  src="/images/article-img.png"
                  alt="article"
                  className={styles.articleThumb}
                />
                <h2 className={styles.articleContent}>
                  Here are some things you should know regarding how we work{' '}
                  Here are some things you should know regarding how we work{' '}
                </h2>
              </div>
            </div>
            <div className={styles.article}>
              {' '}
              <div className={styles.article}>
                <img
                  src="/images/article-img.png"
                  alt="article"
                  width="200"
                  height="200"
                  className={styles.articleThumb}
                />
                <h2 className={styles.articleContent}>
                  Here are some things you should know regarding how we work{' '}
                </h2>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles.article}>
                <img
                  src="/images/article-img.png"
                  alt="article"
                  width="200"
                  height="200"
                  className={styles.articleThumb}
                />
                <h2 className={styles.articleContent}>
                  Here are some things you should know regarding how we work{' '}
                </h2>
              </div>
            </div>
            <div className={styles.article}>
              {' '}
              <div className={styles.article}>
                <img
                  src="/images/article-img.png"
                  alt="article"
                  width="200"
                  height="200"
                  className={styles.articleThumb}
                />
                <h2 className={styles.articleContent}>
                  Here are some things you should know regarding how we work{' '}
                </h2>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles.article}>
                <img
                  src="/images/article-img.png"
                  alt="article"
                  width="200"
                  height="200"
                  className={styles.articleThumb}
                />
                <h2 className={styles.articleContent}>
                  Here are some things you should know regarding how we work{' '}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
