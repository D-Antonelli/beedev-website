import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import LogoSvg from '../svg/logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <LogoSvg/>
      </Link>
      <nav className={styles.nav} aria-label="Main Navigation">
        <ul id="#menu" className={styles.menu}>
          <li>
            <Link href="/" passHref>
              home
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              blog
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              about
            </Link>
          </li>
        </ul>
      </nav>
      <a
        href="#menu"
        className={styles.menuToggle}
        aria-label="Open the menu"
        aria-hidden="true"
      >
        <div className={styles.bar}></div>
      </a>
    </header>
  );
};

export default Header;
