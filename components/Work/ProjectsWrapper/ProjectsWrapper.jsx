'use client';
import styles from './projectsWrapper.module.scss';
import { useRef } from 'react';
import { projects } from '@/data/projectsData';
import { useScroll, useTransform, motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], [300, 0]);
  return (
    <div ref={container} className={styles.wrapper}>
      {projects.map((project, i) => (
        <ProjectCard key={`p_${i}`} {...project} />
      ))}

      <div className="curvedBorder">
        <motion.div style={{ height }} className="circleContainer">
          <div className="circle"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
