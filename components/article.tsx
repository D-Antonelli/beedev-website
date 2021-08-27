/* next.js */
import Link from 'next/link';

/* styles */
import home from '../styles/Article.module.css';
import blog from '../styles/BlogArticle.module.css';

const Article = ({
  post: {
    featuredImage: {
      node: { altText, mediaItemUrl },
    },
    title,
    slug,
  },
  blogPage,
}) => {
  const styles = blogPage ? blog: home;

  return (
    <div>
      <Link href={`/blog/${slug}`} passHref>
        <img src={mediaItemUrl} alt={altText} className={styles.articleThumb} />
      </Link>
      <Link href={`/blog/${slug}`} passHref>
        <h3 className={styles.articleContent}>{title}</h3>
      </Link>
    </div>
  );
};

export default Article;
