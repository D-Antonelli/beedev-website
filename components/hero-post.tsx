/* next.js */
import Link from 'next/link';

/* styles */
import styles from '../styles/Blog.module.css';

/* interface */
import { HeroPostType } from '../types/HeroPost';

const HeroPost = ({ slug, url, alt, title, excerpt }: HeroPostType) => (
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
