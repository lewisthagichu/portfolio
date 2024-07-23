import styles from './card.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArgesHeavy } from '@/public/fonts/fonts';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function Card({ i, title, link, background, range, targetScale, progress }) {
  const enableAnimations = useEnableAnimation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.container}>
      <motion.div
        style={{
          top: `calc(${i * 25}px)`,
          // scale: enableAnimations ? cardScale : 1,
        }}
        className={styles.card}
      >
        <h2 className={ArgesHeavy.className} style={{ color: background }}>
          {title}
        </h2>

        <div style={{ background }} className={styles.imageContainer}>
          <motion.div style={{ scale: imageScale }} className={styles.image}>
            <Image
              src={`/media${link}/web1.jpg`}
              fill
              sizes="100vw"
              alt="image"
            />
          </motion.div>

          <div className={styles.videoContainer}>
            <div style={{ background }} className={styles.video}>
              <video
                className={styles.videoElement}
                autoPlay
                muted
                playsInline
                loop
                aria-label="Video player"
                preload="none"
              >
                <source src={`/media${link}/homeVideo.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
