import styles from './card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';
import VideoComponent from '@/components/common/VideoComponent';

function CardMedia({ project, scrollYProgess, setActive }) {
  const { link, background } = project;
  const imageScale = useTransform(scrollYProgess, [0, 1], [1.6, 1]);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{ background }}
      className={styles.imageContainer}
    >
      <Link scroll={false} href={link}>
        <motion.div style={{ scale: imageScale }} className={styles.image}>
          <Image
            src={`/media${link}/web1.webp`}
            fill
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
      </Link>
    </div>
  );
}

export default CardMedia;
