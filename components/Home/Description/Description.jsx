import styles from './description.module.scss';
import { expertises, paragraphs } from '@/data/aboutData';
import { NeuehaasBody } from '@/public/fonts/fonts';
import MagneticButton from '@/components/common/MagneticButton';

function Description() {
  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.expertise}>
          <h4>SKILLS</h4>
          <div>
            {expertises.map((expertise, index) => (
              <p key={`exp_${index}`}>
                - <span>{expertise}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <MagneticButton
        styles={styles.btnClickDescription}
        href={'/about'}
        text={'More about me'}
      />
    </section>
  );
}

export default Description;
