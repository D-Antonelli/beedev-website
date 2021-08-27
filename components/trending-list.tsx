/* styles */
import styles from '../styles/TrendingList.module.css';

/* components */
import TrendingListItem from './trending-list-item';

/* util */
import numberFormatter from '../utils/number-formatter';

const TrendingList = ({ posts }) => {
  return (
    <div className={styles.trendingList}>
      {posts.map(({ node }, index) => (
        <TrendingListItem
          key={node.id}
          order={numberFormatter(index + 1)}
          item={node}
        />
      ))}
    </div>
  );
};

export default TrendingList;
