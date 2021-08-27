/* styles */
import home from '../styles/ArticleGrid.module.css';
import blog from '../styles/BlogArticleGrid.module.css';

/* components */
import Article from './article';

type Props = {
  posts: any;
  blogPage?: boolean;
};

const ArticleGrid = ({ posts, blogPage }: Props) => {
  const styles = blogPage ? blog : home;
  return (
    <div className={styles.articleGrid}>
      {posts?.map(({ node }) => (
        <Article key={node.id} blogPage={blogPage} post={node} />
      ))}
    </div>
  );
};

export default ArticleGrid;
