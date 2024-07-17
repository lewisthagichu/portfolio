import styles from '@/styles/404.module.scss';
import { NeuehaasBody, ArgesHeavy } from '@/public/fonts/fonts';
import SocialsLinks from '@/components/Footer/SocialLinks/SocialsLinks';
import MagneticButton from '@/components/common/MagneticButton';
import Image from 'next/image';
import gif from '@/public/media/knock.webp';

function Custom404Page() {
  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <div className={styles.textContainer}>
        <h2>Error 404</h2>
        <p>Oh oh, are we lost? </p>
        <MagneticButton
          styles={styles.btnClick404}
          magneticStrength={'60'}
          href={'/gome'}
          text={'Go back to home '}
        />
      </div>
      <div className={styles.imageContainer}>
        <Image src={gif} />
      </div>
      <SocialsLinks />
    </section>
  );
}

export default Custom404Page;
