/* style */
import styles from '../styles/LayoutContainer.module.css';

const LayoutContainer = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default LayoutContainer;
