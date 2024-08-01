import styles from './hero.module.scss';
import { NeuehaasBody } from '@/public/fonts/fonts';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function Hero() {
  const imageContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <section className={`${NeuehaasBody.className} ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.quote}>
          <h4>Never Stop Learning</h4>
          <p>
            The day you stop learning is the day you die. We are here to make
            the world better for those who come after us and have a blast while
            we're at it.
          </p>
        </div>

        <div className={styles.quote}>
          <h4>Embrace failure</h4>
          <p>
            To live is to fail. Life is messy, and perfection is an illusion.
            Start where you are with what you have. The perfect moment to begin
            is now.
          </p>
        </div>
        <div className={styles.circularText}></div>
      </div>

      <div className={styles.name}>
        <h1>
          <span>Lewis </span>
          <span>Thagichu</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
