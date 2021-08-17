import styles from '../styles/Tag.module.css';

type Tag = {
  name: string;
};

const Tag = ({ name }: Tag) => (
  <div className={styles.tag}>
    <span className={styles.hash}>#</span>
    {name}
  </div>
);

export default Tag;
