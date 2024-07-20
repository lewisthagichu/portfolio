import styles from './work.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Work() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.title}>
          <h2 className={ArgesHeavy.className}>WORK</h2>
        </section>

        <ProjectsWrapper />
        <Footer />
      </div>
    </>
  );
}

export default Work;
