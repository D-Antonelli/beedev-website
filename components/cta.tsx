import styles from '../styles/Cta.module.css';
import Link from 'next/link'; 

type CtaType = {
  href: string,
  text: string
}

const Cta = ({href, text} : CtaType) => {
  return (
    <Link href={href} passHref>
      <button className={styles.cta}>{text}</button>
    </Link>
  );
};

export default Cta;
