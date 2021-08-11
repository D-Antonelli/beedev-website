import styles from '../styles/Articles.module.css';

const Articles = ({ children }) => {
  return (
    <section className={styles.articlesSection}>
      <div className={styles.articlesContainer}>
        <h1 className={styles.articleTitle}>latest articles</h1>
        {children}
      </div>
    </section>
  );
};

export default Articles;
