import styles from './info.module.scss';
import Link from 'next/link';

function Info() {
  return (
    <div className={styles.infoContainer}>
      <div className={`${styles.business} ${styles.box}`}>
        <h4>Business:</h4>
        <a href="mailto:hello@lewisthagichu.com">hello@lewisthagichu.com</a>
        <a href="tel:+254722797855">+254 722 797 858</a>
      </div>

      <div className={`${styles.social} ${styles.box}`}>
        <h4>Social:</h4>
        <a href="https://github.com/lewisthagichu">Github</a>
        <a href="https://dev.to/thagichucodes">DEV</a>
        <a href="https://www.linkedin.com/in/lewis-thagichu/">Linkedln</a>
        <a href="https://x.com/thagichucodes">X</a>
      </div>

      <div className={`${styles.menu} ${styles.box}`}>
        <h4>Menu:</h4>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
      </div>
    </div>
  );
}

export default Info;
