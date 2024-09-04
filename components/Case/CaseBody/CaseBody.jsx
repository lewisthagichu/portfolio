import CurvedBorder from '@/components/common/CurvedBorder';
import Bio from '../Bio/Bio';
import MediaContent from '../MediaContent/MediaContent';
import styles from './caseBody.module.scss';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import useEnableAnimation from '@/hooks/useEnableAnimations';

function CaseBody({ project }) {
  const enableAnimations = useEnableAnimation();
  const { src, slogan, title } = project;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 1], [200, 0]);
  return (
    <section ref={container} className={styles.container}>
      <Bio project={project} />
      <MediaContent src={src} title={title} slogan={slogan} />
      {enableAnimations && <CurvedBorder height={height} />}
    </section>
  );
}

export default CaseBody;
