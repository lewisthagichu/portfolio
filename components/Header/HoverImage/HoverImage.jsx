'use client';
import styles from './hoverImage.module.scss';
import { motion } from 'framer-motion';
import { opacity } from '@/utils/anim';

function HoverImage({ src = null, isActive }) {
  return (
    <motion.div
      variants={opacity}
      animate={isActive && src ? 'open' : 'closed'}
      className={styles.imageContainer}
    >
      <img src={src ? `/images/${src}` : ''} alt="image" />
    </motion.div>
  );
}

export default HoverImage;
