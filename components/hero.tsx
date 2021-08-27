import Cta from './cta';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.banner}>welcome to the blogging website</h1>
          <p className={styles.subBanner}>
            this website is powered by next js on the frontend, wordpress cms in
            the backend.
          </p>
          <Cta text="read all blogs" href="/blog" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
