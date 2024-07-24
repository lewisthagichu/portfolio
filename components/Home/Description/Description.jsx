import styles from './description.module.scss';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { expertises, paragraphs } from '@/data/aboutData';
import { NeuehaasBody } from '@/public/fonts/fonts';
import useSmoothOpacity from '@/hooks/useSmoothOpacity';
import MagneticButton from '@/components/common/MagneticButton';

const Word = ({ children, progress, range }) => {
  const smoothOpacity = useSmoothOpacity(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: smoothOpacity }}>{children}</motion.span>
    </span>
  );
};

const Paragraph = ({ paragraph, progress }) => {
  const words = paragraph.split(' ');

  return (
    <p className={styles.paragraph}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

function Description() {
  const containerRef = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef,
    offset: ['start 0.98', 'end 0.92'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef,
    offset: ['start 0.48', 'end 0.4'],
  });

  const divOpacity = useSmoothOpacity(
    scrollYProgress2,
    [0, 0.9, 1],
    [0, 0.2, 1]
  );

  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <div className={styles.wrapper}>
        <div ref={containerRef} className={styles.description}>
          {paragraphs.map((paragraph, paragraphIndex) => (
            <Paragraph
              key={paragraphIndex}
              paragraph={paragraph}
              progress={
                paragraphIndex === 0 ? scrollYProgress1 : scrollYProgress2
              }
            />
          ))}
        </div>
        <motion.div
          style={{ opacity: divOpacity }}
          className={styles.expertise}
        >
          <h4>SKILLS</h4>
          <div>
            {expertises.map((expertise, index) => (
              <p key={`exp_${index}`}>
                - <span>{expertise}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <MagneticButton
        styles={styles.btnClickDescription}
        href={'/about'}
        text={'More about me'}
      />
    </section>
  );
}

export default Description;
