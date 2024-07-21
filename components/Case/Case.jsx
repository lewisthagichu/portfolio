import Footer from '../Footer/Footer';
import CaseBody from './CaseBody/CaseBody';
import styles from './case.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function Case({ project }) {
  const { title } = project;
  const container = useRef(null);

  const { scrollYProgress: titleProgress } = useScroll({
    target: container,
    offset: ['start start', '800px start'],
  });

  const opacity = useTransform(titleProgress, [0, 1], [1, 0]);
  const scale = useTransform(titleProgress, [0, 1], [1, 0.3]);
  const y = useTransform(titleProgress, [0, 0.9], [0, 70]);
  return (
    <div ref={container} className={styles.container}>
      <motion.div style={{ opacity, scale, y }} className={styles.title}>
        <h2 className={ArgesHeavy.className}>{title}</h2>
      </motion.div>

      <CaseBody project={project} />
      <Footer />
    </div>
  );
}

export default Case;
