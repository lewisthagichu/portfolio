import styles from './mediaContent.module.scss';
import Image from 'next/image';

function LargeImage({ src }) {
  return (
    <div className={styles.largeImage}>
      <div className={styles.imageContainer}>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={`${src}/web2.jpg`}
          alt="Project Image"
        />
      </div>
    </div>
  );
}

export default LargeImage;
