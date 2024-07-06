import styles from './footer.module.scss';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.tag}></div>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p>Let's talk</p>
          <p>Let's talk</p>
        </div>
        <div className={styles.btnclick}>
          <Link href="/contact">Drop me an email</Link>
        </div>
      </div>
      <div className={styles.socials}>
        <p>© Lewis Thagichu 2024</p>
        <div className={styles.links}>
          <a href="/https://github.com/lewisthagichu">Github</a>
          <a href="https://x.com/thagichucodes">X</a>
          <a href="https://www.linkedin.com/in/lewis-thagichu/">Linkedln</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
