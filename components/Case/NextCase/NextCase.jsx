import SocialsLinks from '@/components/Footer/SocialLinks/SocialsLinks';
import styles from './nextCase.module.scss';
import Image from 'next/image';
import { ArgesHeavy, NeuehaasBody } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';

function NextCase({ project }) {
  const { src } = project;
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
        <Link href="#">
          <Image src={`${src}/web2.jpg`} fill alt="Next project" />

          <div className={styles.textContainer}>
            <h4>[Next Project]</h4>
            <h2 className={ArgesHeavy.className}>NEXTALK</h2>
          </div>

          <div className="overlay"></div>
        </Link>
      </div>

      <SocialsLinks />
    </motion.div>
  );
}

export default NextCase;
