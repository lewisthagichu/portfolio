'use client';
import styles from './selectedWork.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArgesHeavy } from '@/public/fonts/fonts';
import MagneticButton from '@/components/common/MagneticButton';
import CurvedBorder from '@/components/common/CurvedBorder';
import CardWrapper from './CardWrapper/CardWrapper';

function SelectedWork() {
  const container = useRef(null);
  const title = useRef(null);

  // Wrapper's YProgress used by title div
  // const { scrollYProgress: titleProgress } = useScroll({
  //   target: wrapper,
  //   offset: ['start end', '100vh end'],
  // });

  // const opacity = useTransform(titleProgress, [0, 1], [1, 0]);
  // const scale = useTransform(titleProgress, [0, 1], [1, 0.5]);
  // const y = useTransform(titleProgress, [0, 0.9], [0, 70]);

  // Container's YProgress used by circle container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '1px start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], [300, 0]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#EAEAEA', '#1C1D20']
  );
  const color = useTransform(scrollYProgress, [0, 1], ['#1C1D20', '#fff']);

  return (
    <motion.section
      id="selectedWork"
      ref={container}
      style={{ backgroundColor }}
      className={styles.container}
    >
      <div className={styles.title}>
        <motion.h3 style={{ color }} className={ArgesHeavy.className}>
          <span className={styles.selected}>selected</span>
          <span className={styles.work}>work/</span>
        </motion.h3>
      </div>

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
