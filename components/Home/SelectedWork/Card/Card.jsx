import styles from './card.module.scss';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useEnableAnimation from '@/hooks/useEnableAnimations';
import Cursor from '@/components/common/Cursor';
import CardMedia from './CardMedia';
import CardTitle from './CardTitle';

function Card({ i, project, range, targetScale, progress }) {
  const { background, title } = project;
  const [active, setActive] = useState(false);
  const enableAnimations = useEnableAnimation();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.container}>
      <motion.div
        className={styles.card}
        style={{
          top: `calc(${i * 25}px)`,
          scale: enableAnimations ? cardScale : 1,
        }}
      >
        <CardTitle background={background} title={title} />
        <CardMedia
          project={project}
          scrollYProgess={scrollYProgress}
          setActive={setActive}
        />
      </motion.div>

      <Cursor active={active} />
    </div>
  );
}

export default Card;
