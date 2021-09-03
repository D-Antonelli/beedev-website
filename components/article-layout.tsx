import React from 'react';
import styles from '../styles/ArticleLayout.module.css';

/* types */
import { ArticleLayoutType } from '../types/ArticleLayout';

const ArticleLayout = ({ title, children }: ArticleLayoutType) => (
  <section className={styles.articlesSection}>
    <div className={styles.articlesContainer}>
      <h2 className={styles.articleTitle}>{title}</h2>
      {children}
    </div>
  </section>
);

export default ArticleLayout;
