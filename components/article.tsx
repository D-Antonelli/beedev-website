/* next.js */
import Link from 'next/link';

/* styles */
import home from '../styles/Article.module.css';
import blog from '../styles/BlogArticle.module.css';

/* types */
import { Post } from '../types/Post';
import { ArticleType } from '../types/Article';

const Article = ({ alt, url, title, slug, blogPage }: Post & ArticleType) => {
  const styles = blogPage ? blog : home;

  return (
    <div>
      <Link href={`/blog/${slug}`} passHref>
        <img src={url} alt={alt} className={styles.articleThumb} />
      </Link>
      <Link href={`/blog/${slug}`} passHref>
        <h3 className={styles.articleContent}>{title}</h3>
      </Link>
    </div>
  );
};

export default Article;
