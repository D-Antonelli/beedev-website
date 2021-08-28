import React from 'react';
import styles from '../styles/FlexContainer.module.css';

const FlexContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.flexContainer}>{children}</div>
);

export default FlexContainer;
