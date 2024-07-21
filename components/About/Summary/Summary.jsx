import styles from './summary.module.scss';
import { useRef } from 'react';
import { NeuehaasBody } from '@/public/fonts/fonts';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import bg from '@/public/images/me4.jpg';
import { aboutMe, stack } from '@/data/aboutData';

function Summary() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section
      ref={container}
      className={`${NeuehaasBody.className} ${styles.container}`}
    >
      <div className={styles.imageContainer}>
        <motion.div style={{ y }} className={styles.image}>
          <Image src={bg} alt="image" placeholder="blur" />
        </motion.div>
        {/* <div className="overlay"></div> */}
      </div>

      <div className={styles.textContainer}>
        <div className={styles.box}>
          <h4>About me</h4>
          {aboutMe.map((par, i) => (
            <p key={`par_${i}`}>{par}</p>
          ))}
        </div>
        <div className={styles.box}>
          <h4>Technologies</h4>
          <div className={styles.tech}>
            {stack.map((tech, i) => (
              <span key={`t_${i}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
