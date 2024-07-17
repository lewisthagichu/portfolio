import styles from './work.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '@/data/projects';

function Work() {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h2 className={ArgesHeavy.className}>WORK</h2>
      </section>

      {projects.map((project, i) => (
        <ProjectCard key={`p_${i}`} {...project} />
      ))}
    </div>
  );
}

export default Work;
