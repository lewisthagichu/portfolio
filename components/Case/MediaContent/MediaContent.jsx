import styles from './mediaContent.module.scss';
import LargeImage from './LargeImage/LargeImage';
import MobileImages from './MobileImages/MobileImages';

function MediaContent({ src, slogan, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
            <source
              src={`${src}/${
                src === 'media/work/tictacplay' || src === 'media/work/ignite'
                  ? 'workVideo.webm'
                  : 'homeVideo.webm'
              }`}
              type="video/webm"
            />
            <source
              src={`${src}/${
                src === 'media/work/tictacplay' || src === 'media/work/ignite'
                  ? 'workVideo.mp4'
                  : 'homeVideo.mp4'
              }`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <LargeImage src={src} title={title} slogan={slogan} />
      <MobileImages src={src} />
    </div>
  );
}

export default MediaContent;
