'use client';
import styles from './projectCard.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ src, color, title, description }) {
  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            src={`/images/${src}`}
            width={0}
            height={0}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={`/images/${src}`}
            alt="image"
          />
        </div>
        {/* <div className="overlay"></div> */}

        <div className={styles.videoContainer}>
          <div style={{ background: color }} className={styles.video}>
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

      <div className={styles.title}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ProjectCard;
