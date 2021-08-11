import styles from '../styles/Articles.module.css';

const ArticleGrid = ({children}) => (
  <div className={styles.articleGrid}>
    {children}
  </div>
);

export default ArticleGrid;

