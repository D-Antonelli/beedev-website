import styles from "../styles/TrendingList.module.css";
import TrendingListItem from "./trending-list-item";

const TrendingList = (props) => (
  <div className={styles.trendingList}>
    <TrendingListItem
      number="01"
      title="Top 20 JavaScript tips and tricks to increase your Speed and Efficiency"
      count="6"
    />
    <TrendingListItem
      number="02"
      title="Top 20 JavaScript tips and tricks to increase your Speed and Efficiency Top 20 JavaScript tips"
      count="4"
    />
  </div>
);

export default TrendingList;

