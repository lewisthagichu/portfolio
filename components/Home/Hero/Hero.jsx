import styles from './hero.module.scss';
import { NeuehaasBody, ArgesHeavy } from '@/public/fonts/fonts';

function Hero() {
  return (
    <section className={`${NeuehaasBody.className} ${styles.container}`}>
      <div className={styles.quote}>
        <h4>Never Stop Learning</h4>
        <p>
          The day you stop learning is the day you die. We are here to make the
          world better for those who come after us and have a blast while we're
          at it.
        </p>
      </div>

      <div className={styles.bio}>
        <h1 className={`${styles.homeTitle} ${ArgesHeavy.className}`}>
          Lewis Thagichu
        </h1>
        <div className={styles.location}>
          <p>Full-stack developer</p>
          <p>Based in Nairobi</p>
        </div>
      </div>

      <div className={`${styles.quote} ${styles.second}`}>
        <h4>Embrace failure</h4>
        <p>
          To live is to fail. Life is messy, and perfection is an illusion.
          Start where you are with what you have. The perfect moment to begin is
          now.
        </p>
      </div>
      <div className={styles.circularText}></div>
    </section>
  );
}

export default Hero;
