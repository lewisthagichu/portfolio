import BodyContent from './BodyContent/BodyContent';
import styles from './case.module.scss';
import CaseHero from './CaseHero/CaseHero';

function Case({ project }) {
  return (
    <div className={styles.container}>
      <CaseHero project={project} />
      <BodyContent project={project} />
    </div>
  );
}

export default Case;
