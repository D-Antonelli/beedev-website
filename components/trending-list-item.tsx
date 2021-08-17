import styles from '../styles/TrendingList.module.css';
import CommentSvg from '../svg/comment';
import Link from 'next/link';

type ListType = {
  number: string,
  title: string,
  count: number,
  slug: string
}

const TrendingListItem = ({ number, title, count, slug }: ListType) => (
  <div className={styles.gridContainer}>
    <p className={styles.number}>{number}</p>
    <Link href={`/blog/${slug}`} passHref>
      <p className={styles.title}>{title}</p>
    </Link>
    <p className={styles.comment}>
      <span className={styles.icon}>
        <CommentSvg/>
      </span>
      <span className={styles.count}>{count}</span>comments
    </p>
  </div>
);

export default TrendingListItem;
