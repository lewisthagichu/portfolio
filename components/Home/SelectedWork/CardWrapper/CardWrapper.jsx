'use client';
import styles from './cardWrapper.module.scss';
import { useRef } from 'react';
import { projects } from '@/data/projectsData';
import { useScroll } from 'framer-motion';
import Card from '../Card/Card';

function CardWrapper() {
  const wrapper = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start start', 'end end'],
  });

  const recentProjects = projects.slice(0, 3);

  return (
    <div ref={wrapper} className={styles.wrapper}>
      {recentProjects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.03;
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
    </div>
  );
}

export default CardWrapper;