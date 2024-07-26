import { animm, opacity, expand } from '@/utils/transition';
import { motion } from 'framer-motion';
import styles from './pageTransition.module.scss';

function PageTransition({ children }) {
  const numOfColumns = 5;

  return (
    <div className={styles.stairs}>
      <motion.div
        {...animm(opacity)}
        className={styles.transitionBackground}
      ></motion.div>
      <div className={styles.transitionContainer}>
        {[...Array(numOfColumns)].map((_, i) => (
          <motion.div
            {...animm(expand, numOfColumns - i)}
            className={styles.col}
            key={i}
          ></motion.div>
        ))}
      </div>
      {children}
    </div>
  );
}

export default PageTransition;
