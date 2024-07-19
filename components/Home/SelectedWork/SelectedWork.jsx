'use client';
import styles from './selectedWork.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArgesHeavy, PPMori } from '@/public/fonts/fonts';
import MagneticButton from '@/components/common/MagneticButton';
import CurvedBorder from '@/components/common/CurvedBorder';
import CardWrapper from './CardWrapper/CardWrapper';

function SelectedWork() {
  const container = useRef(null);
  const title = useRef(null);

  const { scrollYProgress: titleProgress } = useScroll({
    target: container,
    offset: ['start start', '800px start'],
  });

  const opacity = useTransform(titleProgress, [0, 1], [1, 0]);
  const scale = useTransform(titleProgress, [0, 1], [1, 0.5]);
  const y = useTransform(titleProgress, [0, 0.9], [0, 70]);

  // Container's YProgress used by circle container
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const height = useTransform(scrollYProgress2, [0, 1], [300, 0]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '1px start'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#1C1D20', '#1C1D20']
  );
  const color = useTransform(scrollYProgress, [0, 1], ['#fff', '#fff']);

  return (
    <motion.section
      id="selectedWork"
      ref={container}
      style={{ backgroundColor }}
      className={styles.container}
    >
      <motion.div style={{ opacity, scale, y }} className={styles.title}>
        <h3 className={ArgesHeavy.className}>
          <span className={styles.selected}>selected</span>
          <span className={styles.work}>work/</span>
        </h3>
        <p className={PPMori.className}>
          Showcase of some of my recent projects
        </p>
      </motion.div>

      <CardWrapper />

      <MagneticButton
        styles={styles.btnClickSelected}
        magneticStrength={'60'}
        href={'/work'}
        text={'View more Projects'}
      />

      <CurvedBorder height={height} />
    </motion.section>
  );
}

export default SelectedWork;
