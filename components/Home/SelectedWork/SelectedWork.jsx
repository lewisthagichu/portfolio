'use client';
import { useRef } from 'react';
import Card from './Card/Card';
import styles from './selectedWork.module.scss';
import { projects } from '@/data/projects';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';

function SelectedWork() {
  const container = useRef(null);
  const wrapper = useRef(null);

  // YProgress used by title div
  const { scrollYProgress: titleProgress } = useScroll({
    target: wrapper,
    offset: ['start end', '100vh end'],
  });

  // YProgress used by card component
  const { scrollYProgress: wrapperProgress } = useScroll({
    target: wrapper,
    offset: ['start start', 'end end'],
  });

  // YProgress used by circle container
  const { scrollYProgress: containerProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(containerProgress, [0, 1], [50, 0]);

  const opacity = useTransform(titleProgress, [0, 1], [1, 0]);
  const scale = useTransform(titleProgress, [0, 1], [1, 0.5]);
  const y = useTransform(titleProgress, [0, 0.9], [0, 70]);

  return (
    <section ref={container} className={styles.container}>
      <motion.div style={{ opacity, scale, y }} className={styles.title}>
        <h3 className={NeuehaasBody.className}>
          <span className={styles.selected}>selected</span>
          <span className={styles.work}>work/</span>
        </h3>
      </motion.div>
      <div ref={wrapper} className={styles.wrapper}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.04;
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
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </section>
  );
}

export default SelectedWork;
