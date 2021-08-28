import styles from '../styles/Tag.module.css';

const Tag = ({ name }: {name: string}) : JSX.Element => (
  <div className={styles.tag}>
    <span className={styles.hash}>#</span>
    {name}
  </div>
);

export default Tag;
