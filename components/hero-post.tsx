/* next.js */
import Link from 'next/link';

/* styles */
import styles from '../styles/Blog.module.css';

type PropType = {
  slug: string;
  url: string;
  alt: string;
  title: string;
  excerpt: string;
};

const HeroPost = ({ slug, url, alt, title, excerpt }: PropType) => (
  <div className={styles.heroPostContainer}>
    <Link href={`/blog/${slug}`} passHref>
      <img src={url} alt={alt} className={styles.heroImage} />
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
