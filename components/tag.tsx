import styles from '../styles/Tag.module.css';

type PropsType = {
  name: string;
};

const Tag = ({ name }: PropsType) => (
  <div className={styles.tag}>
    <span className={styles.hash}>#</span>
    {name}
  </div>
);

export default Tag;
