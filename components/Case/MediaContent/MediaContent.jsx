import styles from './mediaContent.module.scss';
import LargeImage from './LargeImage';
import MobileImages from './MobileImages';

function MediaContent({ src }) {
  return (
    <div className={styles.container}>
      <div className={styles.pad}>
        <div className={styles.videoContainer}>
          <video
            className={styles.videoElement}
            autoPlay
            muted
            playsInline
            loop
            aria-label="Video player"
            preload="none"
          >
            <source src={`${src}/workVideo.mp4`} type="video/mp4" />
            <source src={`${src}/workVideo.webm`} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <LargeImage src={src} />
      <MobileImages src={src} />
    </div>
  );
}

export default MediaContent;
