import React from 'react';

function VideoComponent({ src1, src2 = null }) {
  return (
    <div className="videoContainer">
      <video
        className={styles.videoElement}
        autoPlay
        muted
        playsInline
        loop
        aria-label="Video player"
        preload="none"
      >
        <source src={src1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
