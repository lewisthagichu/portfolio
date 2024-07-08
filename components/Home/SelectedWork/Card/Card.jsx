'use client';
import styles from './card.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArgesBold } from '@/public/fonts/fonts';

function Card({
  i,
  title,
  description,
  src,
  color,
  tech,
  range,
  targetScale,
  progress,
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const videoHeight = useTransform(scrollYProgress, [0, 1], ['64%', '0%']);

  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.container}>
      <motion.div
        style={{ top: `calc(6vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <h2 className={ArgesBold.className} style={{ color }}>
          {title}
        </h2>
        <div className={styles.imageContainer}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955] }}
            style={{ scale: imageScale }}
            className={styles.innerView}
          >
            <Image
              src={`/images/${src}`}
              fill
              sizes="100vw"
              alt="image"
              priority={true}
            />
          </motion.div>

          <div className={styles.video}>
            <div className={styles.videoContainer}>
              <motion.div
                style={{ y: videoHeight, background: color }}
                className={styles.inner}
              >
                {/* <Image
                  src={`/images/${src}`}
                  fill
                  sizes="90vw"
                  alt="image"
                  placeholder="blur"
                  blurDataURL={`/images/${src}`}
                /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
