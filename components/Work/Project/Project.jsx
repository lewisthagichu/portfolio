'use client';
import styles from './project.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';

function Project({ src, background, title, description }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <Link href="/work">
        <div ref={container} className={styles.imageContainer}>
          <motion.div style={{ y }} className={styles.image}>
            <Image src={`/images/${src}`} fill alt="image" />
          </motion.div>

          <div className={styles.videoContainer}>
            <div style={{ background }} className={styles.video}>
              {/* <Image
                  src={`/images/${src}`}
                  fill
                  sizes="90vw"
                  alt="image"
                  placeholder="blur"
                  blurDataURL={`/images/${src}`}
                /> */}
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
