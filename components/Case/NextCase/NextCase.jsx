import SocialsLinks from '@/components/Footer/SocialLinks/SocialsLinks';
import styles from './nextCase.module.scss';
import Image from 'next/image';
import { ArgesHeavy, NeuehaasBody } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { cases } from '@/data/projectsData';

function NextCase({ index }) {
  const currentIndex = cases.findIndex((c) => c.index === index);
  const nextIndex = (currentIndex + 1) % cases.length;
  const nextCase = cases[nextIndex];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  return (
    <motion.div
      ref={container}
      style={{ y }}
      className={`${NeuehaasBody.className} ${styles.container}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={`/media${nextCase.link}/web1.jpg`}
          fill
          alt="Next project"
        />

        {/* <Link href={nextCase?.link}> */}
        <div className={styles.textContainer}>
          <h4>[Next Project]</h4>
          <h2 className={ArgesHeavy.className}>{nextCase?.title}</h2>
        </div>
        {/* </Link> */}

        <div className="overlay"></div>
      </div>

      <SocialsLinks />
    </motion.div>
  );
}

export default NextCase;
