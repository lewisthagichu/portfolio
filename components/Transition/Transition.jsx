import { animm, opacity, expand } from '@/utils/pageTransition';
import { motion } from 'framer-motion';
import styles from './transition.module.scss';

function Transition({ children }) {
  const numOfColumns = 5;

  return (
    <div className={styles.stairs}>
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

export default Transition;
