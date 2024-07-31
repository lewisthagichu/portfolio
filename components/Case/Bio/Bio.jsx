import styles from './bio.module.scss';
import Magnetic from '@/components/common/Magnetic';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Bio({ project }) {
  const { client, year, technologies, role, tag, description, live, github } =
    project;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, -200]);

  return (
    <div ref={container} className={styles.textContainer}>
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
          {live && <a href={live}>Live Site</a>}
          {github && <a href={github}>Source Code</a>}
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
