/* styles */
import styles from '../styles/TrendingList.module.css';

/* components */
import TrendingListItem from './trending-list-item';

/* util */
import numberFormatter from '../utils/number-formatter';

/* type */
import { TrendingListType } from '../types/TrendingList';

const TrendingList = ({ posts }: TrendingListType) => {
  return (
    <div className={styles.trendingList}>
      {posts.map(({ node }, index) => (
        <TrendingListItem
          key={node.id}
          order={numberFormatter(index + 1)}
          title={node.title}
          comments={node.commentCount}
          slug={node.slug}
        />
      ))}
    </div>
  );
};

export default TrendingList;
