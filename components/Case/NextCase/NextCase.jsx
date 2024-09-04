import styles from './nextCase.module.scss';
import { useRef } from 'react';
import { cases } from '@/data/projectsData';
import { ArgesHeavy, NeuehaasBody } from '@/public/fonts/fonts';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import SocialsLinks from '@/components/Footer/SocialLinks/SocialsLinks';
import RoundButton from '@/components/common/RoundButton';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function NextCase({ index }) {
  const enableAnimations = useEnableAnimation();
  const currentIndex = cases.findIndex((c) => c.index === index);
  const nextIndex = (currentIndex + 1) % cases.length;
  const nextCase = cases[nextIndex];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const btnY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  return (
    <motion.div
      ref={container}
      style={{ y: enableAnimations ? y : 0 }}
      className={`${NeuehaasBody.className} ${styles.container}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={`/media${nextCase.link}/web1.webp`}
          fill
          alt="Next project"
        />

        <div className={styles.textContainer}>
          <h4>[Next Project]</h4>
          <h2 className={ArgesHeavy.className}>{nextCase?.title}</h2>
        </div>

        <div className="overlay"></div>
      </div>
      <motion.div
        style={{ y: enableAnimations ? btnY : 0 }}
        className={styles.nextBtn}
      >
        <RoundButton href={nextCase?.link} text={'View Project'} />
      </motion.div>

      <SocialsLinks divStyles={styles.socials} />
    </motion.div>
  );
}

export default NextCase;
