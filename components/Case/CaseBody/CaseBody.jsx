import Bio from '../Bio/Bio';
import MediaContent from '../MediaContent/MediaContent';
import styles from './caseBody.module.scss';

function CaseBody({ project }) {
  const { src } = project;
  return (
    <section className={styles.container}>
      <Bio project={project} />
      <MediaContent src={src} />
    </section>
  );
}

export default CaseBody;
