import React, { FC, useRef, useState } from 'react';
import Controls from '../Controls/Controls';
import styles from './Video.module.scss';
import videoFromFile from '../../assets/dog.mp4';

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  
  const [showControls, setShowControls] = useState<boolean>(true);
  const videoEl = useRef(null);


  return (
    <div className={styles.Video} data-testid="Video">
      <div 
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className={styles.videoContainer}
      >
        <video
          className={styles.videoElement}
          ref={videoEl}
        >
          <source src={videoFromFile} type="video/mp4" />
          Video playback is not supported in your browser!
        </video>

        <Controls show={showControls}/>

      </div>
    </div>
  )
};

export default Video;
