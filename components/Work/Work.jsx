import styles from './work.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper';
import Footer from '../Footer/Footer';

function Work() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '800px start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 70]);

  return (
    <div className={styles.container}>
      <motion.section style={{ opacity, scale, y }} className={styles.title}>
        <h2 className={ArgesHeavy.className}>WORK</h2>
      </motion.section>

      <ProjectsWrapper />
      <Footer />
    </div>
  );
}

export default Work;
