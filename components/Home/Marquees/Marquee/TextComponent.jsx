import styles from './marquee.module.scss';
import { BigShoulders } from '@/public/fonts/fonts';

function TextComponent({ text }) {
  return (
    <div className={styles.text}>
      <h1 className={BigShoulders.className}>{text}</h1>
    </div>
  );
}

export default TextComponent;
