import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            src="/images/logo-3x.png"
            alt="Beedev tech blog"
            height={51}
            width={254}
          ></Image>
        </a>
      </Link>
      <nav className={styles.nav} aria-label="Main Navigation">
        <ul id="#menu" className={styles.menu}>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
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
