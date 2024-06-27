'use client';
import styles from './section2.module.scss';
import { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import ZoomParallax from '../../ZoomParallax/ZoomParallax';

function Section2({ parentYProgress }) {
  const containerRef = useRef();

  const scale = useTransform(parentYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(parentYProgress, [0, 1], [5, 0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 1],
    ['black', 'black', '#B6B6B6']
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ scale, rotate, backgroundColor }}
      className={styles.container}
    >
      <ZoomParallax />
    </motion.section>
  );
}

export default Section2;
