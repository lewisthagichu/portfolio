import Image from 'next/image';
import styles from './mediaContent.module.scss';

function MobileImages({ src }) {
  const images = [`${src}/web1.jpg`, `${src}/web2.jpg`, `${src}/web1.jpg`];
  return (
    <div className={styles.mobileImages}>
      <div className={styles.row}>
        {images.map((image, i) => (
          <div key={`i_${i}`} className={styles.column}>
            <div className={styles.singleImage}>
              <Image fill src={image} alt="image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileImages;
