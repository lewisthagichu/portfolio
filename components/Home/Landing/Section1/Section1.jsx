'use client';
import styles from './section1.module.scss';
import { useTransform, motion } from 'framer-motion';
import Hero from './Hero/Hero';

function Section1({ parentYProgress }) {
  const scale = useTransform(parentYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(parentYProgress, [0, 1], [0, -5]);

  return (
    <motion.section style={{ scale, rotate }} className={styles.container}>
      <Hero />
    </motion.section>
  );
}

export default Section1;
