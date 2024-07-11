import Magnetic from '@/components/common/Magnetic';
import styles from './info.module.scss';
import Link from 'next/link';

function Info() {
  return (
    <div className={styles.infoContainer}>
      <div className={`${styles.business} ${styles.box}`}>
        <h4>Business:</h4>
        <Magnetic>
          <a data-strength="20" href="mailto:hello@lewisthagichu.com">
            hello@lewisthagichu.com
          </a>
        </Magnetic>
        <Magnetic>
          <a data-strength="20" href="tel:+254722797855">
            +254 722 797 858
          </a>
        </Magnetic>
      </div>

      <div className={`${styles.social} ${styles.box}`}>
        <h4>Social:</h4>
        <Magnetic>
          <a
            data-strength="20"
            href="https://github.com/lewisthagichu"
            target="_blank"
          >
            Github
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-strength="20"
            href="https://dev.to/thagichucodes"
            target="_blank"
          >
            DEV
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-strength="20"
            href="https://www.linkedin.com/in/lewis-thagichu/"
            target="_blank"
          >
            Linkedln
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-strength="20"
            href="https://x.com/thagichucodes"
            target="_blank"
          >
            X
          </a>
        </Magnetic>
      </div>

      <div className={`${styles.menu} ${styles.box}`}>
        <h4>Menu:</h4>
        <Magnetic>
          <Link data-strength="20" href="/">
            Home
          </Link>
        </Magnetic>
        <Magnetic>
          <Link data-strength="20" href="/about">
            About
          </Link>
        </Magnetic>
        <Magnetic>
          <Link data-strength="20" href="/work">
            Work
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}

export default Info;
