import Marquee from './Marquee/Marquee';
import styles from './marqueWrapper.module.scss';
import useDimensions from '@/hooks/useDimensions';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const images = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '6.webp',
  '7.webp',
  '8.webp',
  '9.webp',
  '10.webp',
  '11.webp',
  '12.webp',
];

function MarqueesWrapper() {
  const container = useRef(null);
  const { width } = useDimensions();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, width * 0.5]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, width * -0.15]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, width * 0.25]);

  return (
    <section ref={container} className={styles.wrapper}>
      <Marquee
        index={0}
        images={[images[0], images[1], images[2], images[3]]}
        text={'focus'}
        x={x1}
      />
      <Marquee
        index={0}
        images={[images[4], images[5], images[6], images[7]]}
        text={'honesty'}
        x={x2}
      />
      <Marquee
        index={1}
        images={[images[8], images[9], images[10], images[11]]}
        text={'respect'}
        x={x3}
      />
    </section>
  );
}

export default MarqueesWrapper;
