import styles from './marquee.module.scss';
import { ArgesHeavy } from '@/public/fonts/fonts';

function TextComponent({ text }) {
  return (
    <div className={styles.text}>
      <h1 className={ArgesHeavy.className}>{text}</h1>
    </div>
  );
}

export default TextComponent;
