import styles from './marquee.module.scss';
import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';
import { motion } from 'framer-motion';

function Marquee({ images, text, index, x }) {
  return (
    <motion.div style={{ x }} className={styles.container}>
      <ImageComponent image={images[0]} />
      {index === 0 && <TextComponent text={text} />}

      <ImageComponent image={images[1]} />
      <ImageComponent image={images[2]} />

      {index === 1 && <TextComponent text={text} />}
      <ImageComponent image={images[3]} />
    </motion.div>
  );
}

export default Marquee;
