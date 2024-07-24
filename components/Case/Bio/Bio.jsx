import styles from './bio.module.scss';
import RoundButton from '@/components/common/RoundButton';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Bio({ project }) {
  const { client, year, technologies, role, src, live, github } = project;
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
          <a href={live}>Live Site</a>
          <a href={github}>Source Code</a>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet
          aperiam officia beatae non voluptate veritatis magnam dignissimos quam
          illum tenetur voluptatum deserunt quaerat rerum animi neque debitis,
          placeat sequi dolorem nihil. Esse adipisci quos ratione eos dolor
          illum optio et labore maiores facere dignissimos eligendi, accusantium
          consequuntur doloremque! Qui doloribus fugit sunt neque vel voluptates
          omnis veritatis. Quasi dolor et ipsam repellendus cupiditate,
          recusandae animi veritatis! Commodi eligendi, sapiente dolorem quod
          assumenda, soluta omnis rerum praesentium vitae perspiciatis
          doloribus.
        </p>
      </div>

      {live ? (
        <motion.div style={{ y }} className={styles.liveBtn}>
          <RoundButton href={live} text={'View Live'} />
        </motion.div>
      ) : (
        <motion.div style={{ y }} className={styles.liveBtn}>
          <RoundButton href={github} text={'View Code'} />
        </motion.div>
      )}
    </div>
  );
}

export default Bio;
