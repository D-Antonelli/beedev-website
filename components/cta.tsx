import styles from '../styles/Cta.module.css';
import Link from 'next/link';

/* types */
import { CtaType } from '../types/Cta';

const Cta = ({ href, text }: CtaType) => {
  return (
    <Link href={href} passHref>
      <button className={styles.cta}>{text}</button>
    </Link>
  );
};

export default Cta;
