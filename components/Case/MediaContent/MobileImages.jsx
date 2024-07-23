import Image from 'next/image';
import styles from './mediaContent.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function MobileImages({ src }) {
  const images = [`${src}/web1.jpg`, `${src}/web2.jpg`, `${src}/web1.jpg`];
  const enableAnimations = useEnableAnimation(991);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <div ref={container} className={styles.mobileImages}>
      <div className={styles.row}>
        <SingleImage image={images[0]} y={enableAnimations ? y1 : 0} />
        <SingleImage image={images[1]} />
        <SingleImage image={images[2]} y={enableAnimations ? y2 : 0} />
      </div>
    </div>
  );
}

const SingleImage = ({ image, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      <div className={styles.singleImage}>
        <Image fill src={image} alt="image" />
      </div>
    </motion.div>
  );
};

export default MobileImages;
