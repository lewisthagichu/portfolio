import styles from './hero.module.scss';
import Text3d from './Text3d/Text3d';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import bgImage from '@/public/media/work/portfolio/home.webp';

function Hero() {
  const imageContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <section className={styles.container}>
      <motion.div
        style={{ y }}
        ref={imageContainer}
        className={styles.imageContainer}
      >
        <Image src={bgImage} alt="image" placeholder="blur" priority />
      </motion.div>

      <div className={styles.topLeft}>
        <Text3d primary={'LEWIS'} secondary={'LEWIS'} />
        <Text3d primary={'THAGICHU'} secondary={'THAGICHU'} />
      </div>
      <div className={styles.bottomRight}>
        <Text3d primary={'FULL-STACK'} secondary={'FULL-STACK'} />
        <Text3d primary={'DEVELOPER'} secondary={'DEVELOPER'} />
      </div>
      {/* <div className="overlay"></div> */}
    </section>
  );
}

export default Hero;
