import styles from './project.module.scss';

function ProjectTitle({ title, tag }) {
  return (
    <div className={styles.title}>
      <h4>{title}</h4>
      <p>{tag}</p>
    </div>
  );
}

export default ProjectTitle;
