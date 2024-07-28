import { expand, animm } from './navTransiton';
import { motion } from 'framer-motion';
import styles from '../nav/nav.module.scss';

function MenuBg() {
  const numOfColumns = 5;
  return (
    <div className={styles.menuBg}>
      {[...Array(numOfColumns)].map((_, i) => {
        return (
          <motion.div
            className={styles.col}
            key={i}
            {...animm(expand, numOfColumns - i)}
          />
        );
      })}
    </div>
  );
}

export default MenuBg;
