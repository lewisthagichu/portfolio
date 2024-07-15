'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Card from './Card/Card';
import styles from './selectedWork.module.scss';
import { projects } from '@/data/projects';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArgesHeavy, DrukCond } from '@/public/fonts/fonts';
import MagneticButton from '@/components/common/MagneticButton';

function SelectedWork() {
  const container = useRef(null);
  const wrapper = useRef(null);

  // Wrapper's YProgress used by card component
  const { scrollYProgress: wrapperProgress } = useScroll({
    target: wrapper,
    offset: ['start start', 'end end'],
  });

  // Wrapper's YProgress used by title div
  const { scrollYProgress: titleProgress } = useScroll({
    target: wrapper,
    offset: ['start end', '100vh end'],
  });

  const opacity = useTransform(titleProgress, [0, 1], [1, 0]);
  const scale = useTransform(titleProgress, [0, 1], [1, 0.5]);
  const y = useTransform(titleProgress, [0, 0.9], [0, 70]);

  // Container's YProgress used by circle container
  const { scrollYProgress: containerProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const height = useTransform(containerProgress, [0, 1], [300, 0]);

  const backgroundColor = useTransform(
    containerProgress,
    [0, 0.05, 1],
    ['#EAEAEA', '#1C1D20', '#1C1D20']
  );
  const color = useTransform(
    containerProgress,
    [0, 0.05, 1],
    ['#1C1D20', '#fff', '#fff']
  );

  return (
    <motion.section
      id="selectedWork"
      ref={container}
      style={{ backgroundColor }}
      className={styles.container}
    >
      <motion.div style={{ opacity, scale, y }} className={styles.title}>
        <motion.h3 style={{ color }} className={ArgesHeavy.className}>
          <span className={styles.selected}>selected</span>
          <span className={styles.work}>work/</span>
        </motion.h3>
      </motion.div>

      <div ref={wrapper} className={styles.wrapper}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.03;
          return (
            <Card
              key={`c_${i}`}
              i={i}
              {...project}
              progress={wrapperProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <MagneticButton
        styles={styles.btnClickSelected}
        magneticStrength={'60'}
        href={'/work'}
        text={'View more Projects'}
      />

      <div className="curvedBorder">
        <motion.div style={{ height }} className="circleContainer">
          <div className="circle"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SelectedWork;
