import styles from '../styles/ArticleLayout.module.css';

type PropsType = {
  title: string;
  children: any;
};

const ArticleLayout = ({ title, children }: PropsType) => (
  <section className={styles.articlesSection}>
    <div className={styles.articlesContainer}>
      <h2 className={styles.articleTitle}>{title}</h2>
      {children}
    </div>
  </section>
);

export default ArticleLayout;
