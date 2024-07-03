'use client';
import styles from './card.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.container}>
      <motion.div
        style={{ scale: cardScale, top: `calc(-3vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <h2 style={{ color }}>{title}</h2>
        <div className={styles.imageContainer}>
          <motion.div
            style={{ scale: imageScale }}
            className={styles.innerView}
          >
            <Image src={`/images/${src}`} fill sizes="90vw" alt="image" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
