import styles from './aboutHero.module.scss';
import { ArgesHeavy, BlackStone, PPMori } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import bg from '@/public/media/about/me1.jpg';

function AboutHero() {
  const imageContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section className={` ${styles.wrapper} ${ArgesHeavy.className}`}>
      <motion.div style={{ y }} ref={imageContainer} className="imageContainer">
        <Image src={bg} alt="image" placeholder="blur" priority />
      </motion.div>

      <div className={styles.textContainer}>
        <h2>
          <span>Turning ideas</span>
          <span>into memorable</span>{' '}
          <span className={BlackStone.className}>digital experiences</span>
        </h2>
        <h4>
          Bridging the gap between vision and execution with effective software
          development.
        </h4>
        <p className={PPMori.className}>
          Keen on partnering with ambitious brands to develop innovative
          software. I am committed to excellence in every line of code.
        </p>
      </div>

      <div className="overlay"></div>
    </section>
  );
}

export default AboutHero;
