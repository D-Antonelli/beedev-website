import styles from '../styles/Cta.module.css';
import Link from 'next/link';

const Cta = ({ href, text }: { href: string; text?: string }) => {
  return (
    <Link href={href} passHref>
      <button className={styles.cta}>{text}</button>
    </Link>
  );
};

export default Cta;
