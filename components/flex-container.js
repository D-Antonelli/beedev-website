import styles from "../styles/FlexContainer.module.css";

const FlexContainer = ({ children }) => (
  <div className={styles.flexContainer}>{children}</div>
);

export default FlexContainer;
