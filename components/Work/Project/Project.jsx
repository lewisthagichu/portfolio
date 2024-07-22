'use client';
import styles from './project.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';

function Project({ title, description, link, background }) {
  const container = useRef(null);
  console.log(title);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <Link href="/work">
        <div ref={container} className={styles.imageContainer}>
          <motion.div style={{ y }} className={styles.image}>
            <Image
              src={`/media${link}/web1.jpg`}
              width={0}
              height={0}
              sizes="100vw"
              alt="image"
            />
          </motion.div>

          <div className={styles.videoContainer}>
            <div className={styles.video}>
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
      </Link>

      <div className={styles.title}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Project;
