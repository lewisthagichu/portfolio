'use client';
import styles from './projectsWrapper.module.scss';
import { useRef } from 'react';
import { cases } from '@/data/projectsData';
import { useScroll, useTransform } from 'framer-motion';
import Project from '../Project/Project';
import CurvedBorder from '@/components/common/CurvedBorder';

function ProjectsWrapper({ home = false }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const projects = home ? cases.slice(0, 4) : cases;
  return (
    <div ref={container} className={styles.wrapper}>
      {projects.map((project, i) => (
        <Project key={`p_${i}`} {...project} />
      ))}

      <CurvedBorder height={height} />
    </div>
  );
}

export default ProjectsWrapper;
