import styles from './case.module.scss';
import CaseHero from './CaseHero/CaseHero';

function Case() {
  return (
    <div className={styles.container}>
      <CaseHero />
    </div>
  );
}

export default Case;
