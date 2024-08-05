import styles from './mediaContent.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';

function LargeImage({ src, slogan, title }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);

  return (
    <div ref={container} className={styles.largeImage}>
      <motion.div style={{ y }} className={styles.imageContainer}>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={`${src}/web1.webp`}
          alt="Project Image"
        />
      </motion.div>
      <div className={`${styles.slogan} ${NeuehaasBody.className}`}>
        <h1>{title === 'Portfolio' ? 'Nipsey Hussle' : title}</h1>
        <p>{slogan}</p>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default LargeImage;
