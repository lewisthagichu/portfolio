import styles from './work.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import Projects from './ProjectsWrapper/ProjectsWrapper';
import Footer from '../Footer/Footer';

function Work() {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h2 className={ArgesHeavy.className}>WORK</h2>
      </section>

      <Projects />
      <Footer></Footer>
    </div>
  );
}

export default Work;
