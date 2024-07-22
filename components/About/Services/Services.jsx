import styles from './services.module.scss';
import bg from '@/public/media/about/me4.jpg';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { offers } from '@/data/aboutData';
import { ArgesHeavy, BlackStone } from '@/public/fonts/fonts';
import CurvedBorder from '@/components/common/CurvedBorder';

function Services() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);

  return (
    <section ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`imageContainer ${styles.imageContainer}`}>
          <motion.div style={{ y }} className={styles.image}>
            <Image src={bg} alt="image" placeholder="blur" />
          </motion.div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={ArgesHeavy.className}>
            Interested in collaborating with forward-thinking clients determined
            to scale and drive{' '}
            <span className={BlackStone.className}>sustained growth</span>
          </h2>
          <div className={styles.services}>
            <h3>Services:</h3>
            <div className={styles.offers}>
              {offers.map(({ title, description }, i) => (
                <div className={styles.offer} key={`o_${i}`}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      <div className={styles.pad}></div>
      <CurvedBorder height={height} />
    </section>
  );
}

export default Services;
