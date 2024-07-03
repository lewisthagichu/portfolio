'use client';
import { useRef } from 'react';
import Card from './Card/Card';
import styles from './selectedWork.module.scss';
import { projects } from '@/data/projects';
import { useScroll, motion } from 'framer-motion';

function SelectedWork() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={container} className={styles.container}>
      {/* <h3>SELECTED WORK/</h3> */}
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`c_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

export default SelectedWork;
