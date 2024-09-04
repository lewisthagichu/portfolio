import styles from './work.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { slideUp, animm } from '@/utils/anim';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper';
import Footer from '../Footer/Footer';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function Work() {
  const enableAnimations = useEnableAnimation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '800px start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 70]);

  return (
    <motion.div {...animm(slideUp)} className={styles.container}>
      <motion.section
        style={{
          opacity: enableAnimations ? opacity : 1,
          scale: enableAnimations ? scale : 1,
          y: enableAnimations ? y : 0,
        }}
        className={styles.title}
      >
        <h2 className={ArgesHeavy.className}>WORK</h2>
      </motion.section>

      <ProjectsWrapper />
      <Footer />
    </motion.div>
  );
}

export default Work;
