import styles from '../styles/ArticleLayout.module.css';

const ArticleLayout = ({ title, children }) => (
  <section className={styles.articlesSection}>
    <div className={styles.articlesContainer}>
      <h1 className={styles.articleTitle}>{title}</h1>
      {children}
    </div>
  </section>
);

export default ArticleLayout;
