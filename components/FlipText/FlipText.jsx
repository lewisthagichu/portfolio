import styles from './flipText.module.scss';
import { motion } from 'framer-motion';

function FlipText({ divStyles = '', children }) {
  const DURATION = 0.2;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`${styles.container} ${divStyles}`}
    >
      <motion.div
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: '-100%',
          },
        }}
        transition={{
          duration: DURATION,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={styles.word}
        variants={{
          initial: {
            y: '100%',
          },
          hovered: {
            y: 0,
          },
        }}
        transition={{
          duration: DURATION,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default FlipText;
