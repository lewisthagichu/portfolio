'use client';
import styles from './landing.module.scss';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

function Landing() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div ref={container} className={styles.container}>
      <Section1 parentYProgress={scrollYProgress} />
      <Section2 parentYProgress={scrollYProgress} />
    </div>
  );
}

export default Landing;
