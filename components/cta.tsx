import styles from '../styles/Cta.module.css';
import Link from 'next/link'; 

type PropsType = {
  href: string,
  text: string
}

const Cta = ({href, text} : PropsType) => {
  return (
    <Link href={href} passHref>
      <button className={styles.cta}>{text}</button>
    </Link>
  );
};

export default Cta;
