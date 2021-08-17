import styles from '../styles/TrendingList.module.css';
import TrendingListItem from './trending-list-item';
import numberFormatter from '../utils/number-formatter';

const TrendingList = ({ posts }) => {
  return (
    <div className={styles.trendingList}>
      {posts.map(({ node }, index) => (
        <TrendingListItem
          key={node.id}
          number={numberFormatter(index + 1)}
          title={node.title}
          count={node.commentCount}
          slug={node.slug}
        />
      ))}
    </div>
  );
};

export default TrendingList;
