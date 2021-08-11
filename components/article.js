import styles from '../styles/Articles.module.css';

const Article = ({src, alt, title}) => {
  return (
    <div className={styles.article}>
      <img src={src} alt={alt} className={styles.articleThumb} />
      <h2 className={styles.articleContent}>{title}</h2>
    </div>
  );
};

export default Article;
