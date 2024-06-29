import styles from './hero.module.scss';
import Text3d from './Text3d/Text3d';

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topLeft}>
        <Text3d primary={'LEWIS'} secondary={'LEWIS'} />
        <Text3d primary={'THAGICHU'} secondary={'THAGICHU'} />
      </div>
      <div className={styles.bottomRight}>
        <Text3d primary={'FULL-STACK'} secondary={'FULL-STACK'} />
        <Text3d primary={'DEVELOPER'} secondary={'DEVELOPER'} />
      </div>

      {/* <div className="imageContainer">
        <Image src={bgImage} fill sizes="100vw" quality={100} alt="image" />
      </div> */}
    </div>
  );
}

export default Hero;
