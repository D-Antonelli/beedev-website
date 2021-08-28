/* styles */
import home from '../styles/ArticleGrid.module.css';
import blog from '../styles/BlogArticleGrid.module.css';

/* components */
import Article from './article';

/* types */
import PropsType from '../interfaces/PropsType';

interface PropsWithExtension extends PropsType {
  id: string;
  featuredImage?: { node?: { altText?: string; mediaItemUrl?: string } };
}

const ArticleGrid = ({
  posts,
  blogPage,
}: {
  posts: { node: PropsWithExtension }[];
  blogPage?: boolean;
}) => {
  const styles = blogPage ? blog : home;
  return (
    <div className={styles.articleGrid}>
      {posts?.map(({ node }) => (
        <Article
          key={node.id}
          alt={node.featuredImage?.node.altText}
          url={node.featuredImage?.node.mediaItemUrl}
          title={node.title}
          slug={node.slug}
          blogPage={blogPage}
        />
      ))}
    </div>
  );
};

export default ArticleGrid;
