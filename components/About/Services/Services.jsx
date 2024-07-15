import styles from './services.module.scss';
import bg from '@/public/images/me.jpg';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function Services() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.imageContainer}>
        <motion.div style={{ y }} className={styles.image}>
          <Image src={bg} alt="image" />
        </motion.div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Services;
