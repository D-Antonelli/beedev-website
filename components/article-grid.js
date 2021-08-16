import styles from '../styles/ArticleGrid.module.css';
import Article from './article';

const ArticleGrid = ({ posts }) => {
  return (
    <div className={styles.articleGrid}>
      {posts.map(({ node }) =>
          <Article
            key={node.id}
            src={node.featuredImage.node?.mediaItemUrl}
            slug={node.slug}
            alt={node.featuredImage.node?.altText}
            title={node.title}
          />
      )}
    </div>
  );
};

export default ArticleGrid;
