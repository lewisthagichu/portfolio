import Magnetic from '@/components/common/Magnetic';
import styles from './info.module.scss';
import Link from 'next/link';

function Info() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.box}>
        <h4>Business:</h4>
        <div className={styles.business}>
          <Magnetic>
            <a
              data-strength="20"
              data-text-strength="0"
              href="mailto:info@lewisthagichu.com"
            >
              <span className="btn-text">info@lewisthagichu.com</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              data-strength="20"
              data-text-strength="0"
              href="tel:+254722797855"
            >
              <span className="btn-text">+254 722 797 858</span>
            </a>
          </Magnetic>
        </div>
      </div>

      <div className={`${styles.social} ${styles.box}`}>
        <h4>Social:</h4>
        <Magnetic>
          <a
            data-strength="20"
            data-text-strength="0"
            href="https://github.com/lewisthagichu"
            target="_blank"
          >
            <span className="btn-text">Github</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-strength="20"
            data-text-strength="0"
            href="https://dev.to/thagichucodes"
            target="_blank"
          >
            <span className="btn-text">DEV</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-strength="20"
            data-text-strength="0"
            href="https://www.linkedin.com/in/lewis-thagichu/"
            target="_blank"
          >
            <span className="btn-text">Linkedln</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-strength="20"
            data-text-strength="0"
            href="https://x.com/thagichucodes"
            target="_blank"
          >
            <span className="btn-text">X</span>
          </a>
        </Magnetic>
      </div>

      <div className={`${styles.menu} ${styles.box}`}>
        <h4>Menu:</h4>
        <Magnetic>
          <Link
            scroll={false}
            data-strength="20"
            data-text-strength="0"
            href="/"
          >
            <span className="btn-text">Home</span>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            scroll={false}
            data-strength="20"
            data-text-strength="0"
            href="/about"
          >
            <span className="btn-text">About</span>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            scroll={false}
            data-strength="20"
            data-text-strength="0"
            href="/work"
          >
            <span className="btn-text">Work</span>
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}

export default Info;
