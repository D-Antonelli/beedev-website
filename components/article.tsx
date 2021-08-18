import styles from '../styles/Article.module.css';
import Link from 'next/link';

type ArticleType = {
  src: string;
  alt: string;
  title: string;
  slug: string;
};

const Article = ({ src, alt, title, slug }: ArticleType) => {
  return (
    <div>
      <Link href={`/blog/${slug}`} passHref>
        <img src={src} alt={alt} className={styles.articleThumb} />
      </Link>
      <Link href={`/blog/${slug}`} passHref>
        <h3 className={styles.articleContent}>{title}</h3>
      </Link>
    </div>
  );
};

export default Article;
