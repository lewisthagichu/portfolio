import styles from './work.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import ProjectCard from './ProjectCard/ProjectCard';

function Work() {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h2 className={ArgesHeavy.className}>WORK</h2>
      </section>
      <div styles={styles.wrapper}>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Work;
