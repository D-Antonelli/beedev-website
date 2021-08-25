import Link from 'next/link';
import mainStyle from '../styles/Header.module.css';
import navStyles from '../styles/Navigation.module.css';
import lightStyle from '../styles/HeaderLight.module.css';
import LogoSvg from '../svg/logo';

type PropsType = {
  theme?: string
}

const Header = ({ theme }: PropsType) => {
  return (
    <header className={theme === 'light' ? lightStyle.header : mainStyle.header}>
      <Link href="/" passHref>
        <LogoSvg />
      </Link>
      <nav className={navStyles.nav} aria-label="Main Navigation">
        <ul id="#menu" className={navStyles.menu}>
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
        className={navStyles.menuToggle}
        aria-label="Open the menu"
        aria-hidden="true"
      >
        <div className={navStyles.bar}></div>
      </a>
    </header>
  );
};

export default Header;
