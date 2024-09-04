import styles from './selectedWork.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArgesHeavy, PPMori } from '@/public/fonts/fonts';
import MagneticButton from '@/components/common/MagneticButton';
import CurvedBorder from '@/components/common/CurvedBorder';
import ProjectsWrapper from '@/components/Work/ProjectsWrapper/ProjectsWrapper';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function SelectedWork() {
  const enableAnimations = useEnableAnimation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '800px start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 70]);

  // Container's YProgress used by circle container
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const height = useTransform(scrollYProgress2, [0, 1], [200, 0]);

  return (
    <section id="selectedWork" ref={container} className={styles.container}>
      <motion.div
        style={{
          opacity: enableAnimations ? opacity : 1,
          scale: enableAnimations ? scale : 1,
          y: enableAnimations ? y : 0,
        }}
        className={styles.title}
      >
        <h3 className={ArgesHeavy.className}>
          <span className={styles.selected}>selected</span>
          <span className={styles.work}>work/</span>
        </h3>
        <p className={PPMori.className}>
          A showcase of some of my recent projects
        </p>
      </motion.div>

      <ProjectsWrapper home={true} />

      <MagneticButton
        styles={styles.btnClickSelected}
        href={'/work'}
        text={'View more Projects'}
      />

      <CurvedBorder height={height} />
    </section>
  );
}

export default SelectedWork;
