import Footer from '../Footer/Footer';
import CaseBody from './CaseBody/CaseBody';
import styles from './case.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';
import Image from 'next/image';

function Case({ project }) {
  const { title, src } = project;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={ArgesHeavy.className}>{title}</h2>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageElement}>
          <Image src={`${src}/web1.jpg`} priority fill alt="image" />
        </div>
      </div>

      <CaseBody project={project} />
      <Footer />
    </div>
  );
}

export default Case;
