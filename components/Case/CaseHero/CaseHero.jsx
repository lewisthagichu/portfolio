import styles from './caseHero.module.scss';
import Image from 'next/image';
import heroImage from '@/public/images/homeFinder.jpg';
import { ArgesHeavy } from '@/public/fonts/fonts';

function CaseHero() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 className={ArgesHeavy.className}>HOMEFINDER</h2>
      </div>

      <div className={styles.imageContainer}>
        <Image src={heroImage} fill alt="image" placeholder="blur" />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.details}>
          <div className={styles.box}>
            <h4>Client</h4>
            <p>Personal</p>
          </div>
          <div className={styles.box}>
            <h4>Role / Services</h4>
            <p>Design & Development</p>
          </div>
          <div className={styles.box}>
            <h4>Year</h4>
            <p>2024</p>
          </div>
          <div className={styles.box}>
            <h4>Technologies</h4>
            <p>Next.JS</p>
            <p>MongoDB</p>
            <p>Cloudinary</p>
            <p>Sass</p>
          </div>
          <div className={styles.box}>
            <a href="#">Live Site</a>
            <a href="#">Source Code</a>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            labore cupiditate provident omnis eveniet beatae placeat sint nisi
            quasi dolore, officia exercitationem eius suscipit pariatur. Atque
            voluptate dolorum rem, mollitia soluta ratione ex temporibus dolores
            omnis iste distinctio iure debitis qui nemo harum excepturi minima
            ducimus, magnam laboriosam sint suscipit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseHero;
