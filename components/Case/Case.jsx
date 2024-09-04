import styles from './case.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { slideUp, animm } from '@/utils/anim';
import CaseBody from './CaseBody/CaseBody';
import NextCase from './NextCase/NextCase';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function Case({ project }) {
  const enableAnimations = useEnableAnimation();
  const { title, index } = project;
  const container = useRef(null);

  const { scrollYProgress: titleProgress } = useScroll({
    target: container,
    offset: ['start start', '800px start'],
  });

  const opacity = useTransform(titleProgress, [0, 1], [1, 0]);
  const scale = useTransform(titleProgress, [0, 1], [1, 0.3]);
  const y = useTransform(titleProgress, [0, 0.9], [0, 800]);

  return (
    <motion.div
      {...animm(slideUp)}
      ref={container}
      className={styles.container}
    >
      <motion.div
        style={{
          opacity: enableAnimations ? opacity : 1,
          scale: enableAnimations ? scale : 1,
          y: enableAnimations ? y : 0,
        }}
        className={styles.title}
      >
        <h2 className={ArgesHeavy.className}>{title}</h2>
      </motion.div>

      <CaseBody project={project} />
      <NextCase index={index} />
    </motion.div>
  );
}

export default Case;
