'use client';
import styles from './card.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { coign47BoldPro } from '@/public/fonts/fonts';

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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]);
  const videoHeight = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.container}>
      <motion.div
        style={{ scale: cardScale, top: `calc(-3vh + ${i * 20}px)` }}
        className={styles.card}
      >
        <h2 className={coign47BoldPro.className} style={{ color }}>
          {title}
        </h2>
        <div className={styles.imageContainer}>
          <motion.div
            style={{ scale: imageScale }}
            className={styles.innerView}
          >
            <Image
              src={`/images/${src}`}
              fill
              sizes="90vw"
              alt="image"
              priority={true}
            />
          </motion.div>

          {/* <div className={styles.video}>
            <div className={styles.videoContainer}>
              <motion.div
                style={{ y: videoHeight, background: color }}
                className={styles.inner}
              >
                <Image
                  src={`/images/${src}`}
                  fill
                  sizes="90vw"
                  alt="image"
                  placeholder="blur"
                  blurDataURL={`/images/${src}`}
                />
              </motion.div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
