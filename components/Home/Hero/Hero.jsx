'use client';
import styles from './hero.module.scss';
import Text3d from './Text3d/Text3d';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function Hero() {
  const imageContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  return (
    <div className={styles.container}>
      <motion.div style={{ y }} ref={imageContainer} className="imageContainer">
        <Image
          src={'/images/bg-img.jpg'}
          sizes="100vw"
          width={0}
          height={0}
          alt="image"
        />
      </motion.div>

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
