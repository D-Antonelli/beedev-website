/* styles */
import styles from '../styles/TrendingList.module.css';

/* svg */
import CommentSvg from '../svg/comment';

/* nextjs */
import Link from 'next/link';

/* types */
import { TrendingListItemType } from '../types/TrendingListItem';

const TrendingListItem = ({
  title,
  comments,
  slug,
  order,
}: TrendingListItemType) => (
  <div className={styles.gridContainer}>
    <span className={styles.number}>{order}</span>
    <Link href={`/blog/${slug}`} passHref>
      <h3 className={styles.title}>{title}</h3>
    </Link>
    <div className={styles.comment}>
      <span className={styles.icon}>
        <CommentSvg />
      </span>
      <span className={styles.count}>{comments}</span>comments
    </div>
  </div>
);

export default TrendingListItem;
