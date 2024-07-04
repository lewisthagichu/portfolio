import styles from './hero.module.scss';
import Text3d from './Text3d/Text3d';
import Image from 'next/image';

function Hero() {
  return (
    <div className={styles.wrapper}>
      <Image src={'/images/bg-img.jpg'} fill={true} alt="image" />

      <div className={styles.topLeft}>
        <Text3d primary={'LEWIS'} secondary={'LEWIS'} />
        <Text3d primary={'THAGICHU'} secondary={'THAGICHU'} />
      </div>
      <div className={styles.bottomRight}>
        <Text3d primary={'FULL-STACK'} secondary={'FULL-STACK'} />
        <Text3d primary={'DEVELOPER'} secondary={'DEVELOPER'} />
      </div>
    </div>
  );
}

export default Hero;
