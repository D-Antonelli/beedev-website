import styles from '../styles/TrendingList.module.css';
import CommentSvg from '../svg/comment';
import Link from 'next/link';


const TrendingListItem = ({ item: { title, commentCount, slug }, order }) => (
  <div className={styles.gridContainer}>
    <span className={styles.number}>{order}</span>
    <Link href={`/blog/${slug}`} passHref>
      <h3 className={styles.title}>{title}</h3>
    </Link>
    <div className={styles.comment}>
      <span className={styles.icon}>
        <CommentSvg />
      </span>
      <span className={styles.count}>{commentCount}</span>comments
    </div>
  </div>
);

export default TrendingListItem;
