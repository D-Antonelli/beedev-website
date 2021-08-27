import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.credits}>
      <h2 className={styles.creditsTitle}>
        made with &#129505; by derya antonelli
      </h2>
      <h3 className={styles.creditsBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.{' '}
      </h3>
      <div className={styles.social}>
        <a href="https://github.com/D-Antonelli">github</a>
        <a href="https://www.linkedin.com/in/derya-a-antonelli/">linkedin</a>
        {/* <a>rss</a> */}
      </div>
    </div>
    <div className={styles.copyright}>
      <p>© 2021 Beedev Co.</p>
      <p>All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;