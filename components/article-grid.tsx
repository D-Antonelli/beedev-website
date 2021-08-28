/* styles */
import home from '../styles/ArticleGrid.module.css';
import blog from '../styles/BlogArticleGrid.module.css';

/* components */
import Article from './article';

const ArticleGrid = ({ posts, blogPage }) => {
  const styles = blogPage ? blog : home;
  return (
    <div className={styles.articleGrid}>
      {posts?.map(({ node }) => (
        <Article
          key={node.id}
          alt={node.featuredImage?.node.altText}
          url={node.featuredImage?.node.mediaItemUrl}
          title={node.title}
          slug={node}
          blogPage={blogPage}
        />
      ))}
    </div>
  );
};

export default ArticleGrid;
