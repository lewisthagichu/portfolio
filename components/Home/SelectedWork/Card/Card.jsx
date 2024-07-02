'use client';
import styles from './card.module.scss';
import Image from 'next/image';

function Card({ i, title, description, src, color, tech, range, targetScale }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <div className={styles.imageContainer}>
          <div className={styles.innerView}>
            <Image
              src={`/images/${src}`}
              fill
              sizes="100vw"
              //   placeholder="blur"
              //   blurDataURL={`/images/${src}`}
              priority
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
