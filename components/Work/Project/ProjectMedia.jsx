import styles from './project.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import VideoComponent from '@/components/common/VideoComponent';

function ProjectMedia({ setActive, link }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div
      ref={container}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={styles.imageContainer}
    >
      <motion.div style={{ y }} className={styles.image}>
        <Image
          src={`/media${link}/web1.webp`}
          width={0}
          height={0}
          sizes="100vw"
          alt="image"
        />
      </motion.div>

      <VideoComponent
        videoContainer={styles.videoContainer}
        video={styles.video}
        videoElement={styles.videoElement}
        link={link}
      />
    </div>
  );
}

export default ProjectMedia;
