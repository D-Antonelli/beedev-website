import styles from '../styles/Articles.module.css';
import Article from './article';

const ArticleGrid = ({ posts }) => (
  <div className={styles.articleGrid}>
    {posts.map(({ node }) => {
      <Article
        key={node.id}
        src={node.featuredImage.node.mediaItemUrl}
        alt={node.featuredImage.node.altText}
        title={node.title}
      />;
    })}
  </div>
);

export default ArticleGrid;
