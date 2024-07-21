import styles from './caseHero.module.scss';
import Image from 'next/image';
import { ArgesHeavy } from '@/public/fonts/fonts';

function CaseHero({ project }) {
  const { title, client, year, technologies, role, src, live, github } =
    project;
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 className={ArgesHeavy.className}>{title}</h2>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageElement}>
          <Image src={`${src}/web1.jpg`} priority fill alt="image" />
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.details}>
          <div className={styles.box}>
            <h4>Client</h4>
            <p>{client}</p>
          </div>
          <div className={styles.box}>
            <h4>Role / Services</h4>
            <p>{role}</p>
          </div>
          <div className={styles.box}>
            <h4>Year</h4>
            <p>{year}</p>
          </div>
          <div className={styles.box}>
            <h4>Technologies</h4>
            {technologies.map((tech, i) => (
              <p key={`te_${i}`}>{tech}</p>
            ))}
          </div>

          <div className={styles.box}>
            <a href={live}>Live Site</a>
            <a href={github}>Source Code</a>
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
