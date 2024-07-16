'use client';
import styles from './summary.module.scss';
import { useRef } from 'react';
import { PPMori, NeuehaasBody } from '@/public/fonts/fonts';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import bg from '@/public/images/me4.jpg';

function Summary() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);
  return (
    <section
      ref={container}
      className={`${NeuehaasBody.className} ${styles.container}`}
    >
      <div className={styles.imageContainer}>
        <motion.div style={{ y }} className={styles.image}>
          <Image src={bg} alt="image" />
        </motion.div>
        {/* <div className="overlay"></div> */}
      </div>

      <div className={styles.content}>
        <div className={styles.box}>
          <h4>About me</h4>
          <p>
            I'm Lewis Thagichu, a software engineer based in Nairobi, Kenya.
          </p>
          <p>
            I believe that the best products come from a blend of creativity,
            technical expertise, and strong teamwork. Therefore my strategy to
            building focuses on combining creative thinking with an analytical
            approach to solve problems at the intersection of business and
            technology.
          </p>
          <p>
            As someone dedicated to personal growth, I view each project as an
            opportunity for self-improvement. I can handle projects
            independently or seamlessly integrate into existing developer teams.
          </p>
          <p>
            I am a music and sports enthusiast, and I also consider myself to be
            quite the photographer.
          </p>
        </div>
        <div className={styles.box}>
          <h4>Technologies</h4>
          <div className={styles.tech}>
            <span>Next.JS</span>
            <span>React</span>
            <span>Express JS</span>
            <span>Flask</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Sass</span>
            <span>Git</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
