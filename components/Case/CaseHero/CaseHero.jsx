import styles from './caseHero.module.scss';
import Image from 'next/image';
import heroImage from '@/public/images/homeFinder.jpg';
import { ArgesHeavy } from '@/public/fonts/fonts';

function CaseHero() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 className={ArgesHeavy.className}>WORK</h2>
      </div>

      <div className={styles.imageContainer}>
        <Image src={heroImage} alt="image" placeholder="blur" />
      </div>
    </section>
  );
}

export default CaseHero;
