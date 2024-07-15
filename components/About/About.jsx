`use client`;
import styles from './about.module.scss';
import { ArgesHeavy, BlackStone, PPMori } from '@/public/fonts/fonts';
import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import useHeaderContext from '@/hooks/useHeaderContext';
import Image from 'next/image';
import bg from '@/public/images/me3.jpg';
import Services from './Services/Services';
import Summary from './Summary/Summary';

function About() {
  const { setHeaderStyle } = useHeaderContext();
  const imageContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    setHeaderStyle({ color: '#fff' });
  }, []);

  return (
    <div className={styles.container}>
      <section className={` ${styles.wrapper} ${ArgesHeavy.className}`}>
        <motion.div
          style={{ y }}
          ref={imageContainer}
          className="imageContainer"
        >
          <Image src={bg} alt="image" />
        </motion.div>

        <div className={styles.textContainer}>
          <h2>
            <span>Turning ideas</span>
            <span>into memorable</span>{' '}
            <span className={BlackStone.className}>digital experiences</span>
          </h2>
          <h4>
            Bridging the gap between vision and execution with effective
            software development.
          </h4>
          <p className={PPMori.className}>
            Interested in collaborating with forward-thinking clients to develop
            innovative software. I am committed to excellence in every line of
            code.
          </p>
        </div>

        <div className="overlay"></div>
      </section>
      <Summary />
      <Services />
      {/* <Services /> */}
    </div>
  );
}

export default About;
