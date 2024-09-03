import styles from './bio.module.scss';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Magnetic from '@/components/common/Magnetic';
import FlipText from '@/components/FlipText/FlipText';

function Bio({ project }) {
  const { client, year, technologies, role, description, live, github } =
    project;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, -200]);

  return (
    <div
      ref={container}
      className={`${styles.textContainer} ${NeuehaasBody.className}`}
    >
      <div className={styles.details}>
        <div className={styles.box}>
          <h4>Client</h4>
          <p>{client}</p>
        </div>
        <div className={styles.box}>
          <h4>Services</h4>
          <p>{role}</p>
        </div>
        <div className={styles.box}>
          <h4>Year</h4>
          <p>{year}</p>
        </div>
        <div className={styles.box}>
          <h4>Technologies</h4>
          {technologies.map((tech, i) => (
            <p key={`te_${i}`}>{tech}</p>
          ))}
        </div>

        <div className={styles.box}>
          {live && (
            <a href={live} target="_blank">
              <FlipText divStyles={styles.text}>Live Site</FlipText>
              <div className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </div>
            </a>
          )}
          {github && (
            <a href={github} target="_blank">
              <FlipText divStyles={styles.text}>Source Code</FlipText>
              <div className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <motion.div style={{ y }} className={styles.liveBtn}>
        <a href={live ? live : github} target="_blank">
          <Magnetic>
            <button
              data-text-strength={50}
              data-strength={100}
              className={`roundBtn ${styles}`}
            >
              <span className={`btn-text`}>
                {live ? 'View live' : 'View Code'}
              </span>
            </button>
          </Magnetic>
        </a>
      </motion.div>
    </div>
  );
}

export default Bio;
