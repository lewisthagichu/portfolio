import styles from './project.module.scss';
import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';
import ProjectTitle from './ProjectTitle';
import Cursor from '@/components/common/Cursor';

function Project({ title, description, link }) {
  const [active, setActive] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <Link href={link}>
        <div
          ref={container}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={styles.imageContainer}
        >
          <motion.div style={{ y }} className={styles.image}>
            <Image
              src={`/media${link}/web1.jpg`}
              width={0}
              height={0}
              sizes="100vw"
              alt="image"
            />
          </motion.div>

          <div className={styles.videoContainer}>
            <div className={styles.video}>
              <video
                className={styles.videoElement}
                autoPlay
                muted
                playsInline
                loop
                aria-label="Video player"
                preload="none"
              >
                <source src={`/media${link}/homeVideo.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Link>

      <ProjectTitle title={title} description={description} />
      <Cursor active={active} />
    </section>
  );
}

export default Project;
