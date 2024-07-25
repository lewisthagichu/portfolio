import styles from './project.module.scss';

function ProjectTitle({ title, description }) {
  return (
    <div className={styles.title}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProjectTitle;
