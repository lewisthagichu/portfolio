import styles from './text3d.module.scss';

export default function Text3d({ primary, secondary }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}
