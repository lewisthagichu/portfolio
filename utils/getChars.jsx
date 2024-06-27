import { translate } from './anim';
import { motion } from 'framer-motion';

export const getChars = (word) => {
  let chars = [];
  word.split('').forEach((char, i) => {
    chars.push(
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    );
  });
  return chars;
};
