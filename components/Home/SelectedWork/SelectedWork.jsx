'use client';
import Card from './Card/Card';
import styles from './selectedWork.module.scss';
import { projects } from '@/data/projects';
import { useScroll, motion } from 'framer-motion';

function SelectedWork() {
  return (
    <section className={styles.container}>
      {/* <h3>SELECTED WORK/</h3> */}
      <div className="wrapper">
        {projects.map((project, i) => {
          const range = [i * 0.25, 1];
          const targetScale = (projects.length - i) * 0.05;

          return (
            <Card
              key={`c_${i}`}
              i={i}
              {...project}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SelectedWork;
