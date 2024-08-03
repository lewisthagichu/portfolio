import Image from 'next/image';
import styles from './marquee.module.scss';

function ImageComponent({ image }) {
  return (
    <div className={styles.imageContainer}>
      <Image src={`/media/home/${image}`} sizes="25vw" fill alt="image" />
    </div>
  );
}

export default ImageComponent;
