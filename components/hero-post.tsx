/* next.js */
import Link from 'next/link';

/* styles */
import styles from '../styles/Blog.module.css';

const HeroPost = ({
  post: {
    featuredImage: {
      node: { mediaItemUrl, altText },
    },
    slug,
    title,
    excerpt,
  },
}) => (
  <div className={styles.heroPostContainer}>
    <Link href={`/blog/${slug}`} passHref>
      <img src={mediaItemUrl} alt={altText} className={styles.heroImage} />
    </Link>
    <Link href={`/blog/${slug}`} passHref>
      <h1 className={styles.heroTitle}>{title}</h1>
    </Link>
    <p className={styles.heroExcerpt}>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
    </p>
  </div>
);

export default HeroPost;
