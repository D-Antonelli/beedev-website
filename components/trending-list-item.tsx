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
    <span className={styles.number}>{number}</span>
    <Link href={`/blog/${slug}`} passHref>
      <h3 className={styles.title}>{title}</h3>
    </Link>
    <div className={styles.comment}>
      <span className={styles.icon}>
        <CommentSvg/>
      </span>
      <span className={styles.count}>{count}</span>comments
    </div>
  </div>
);

export default TrendingListItem;
