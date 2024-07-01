import styles from './text3d.module.scss';
import { DrukCond } from '@/public/fonts/fonts';

export default function Text3d({ primary, secondary }) {
  return (
    <div className={`${styles.textContainer} ${DrukCond.className}`}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}
