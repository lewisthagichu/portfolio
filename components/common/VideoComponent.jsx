import React from 'react';

function VideoComponent({ videoContainer, video, videoElement, link }) {
  return (
    <div className={videoContainer}>
      <div className={video}>
        <video
          className={videoElement}
          autoPlay
          muted
          playsInline
          loop
          aria-label="Video player"
          preload="none"
        >
          <source src={`/media${link}/homeVideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoComponent;
