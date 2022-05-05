import React, { FC } from 'react';
import { KeyFrame } from '../../types/interfaces';
import { getKeyFrames } from '../../utils/data';
import styles from './Progressbar.module.scss';

interface ProgressbarProps {}

const Progressbar: FC<ProgressbarProps> = () => {

  let [progressLength, setProgressLength] = React.useState<number>(0);
  let [keyframes, setKeyframes] = React.useState<KeyFrame[]>([]);

  
  // 1. load key frames
  // setKeyframes(getKeyFrames()); // but map through the element width when resized

  // 2. update the progressLength when the video.currentTime changes...

  const scrub = (timestamp: number) => {};

  const updateFrameVisibility = (frame: KeyFrame, show: boolean) => {
    const frames = [...keyframes];
    const selectedFrame = frames.find(f => f.id === frame.id);
    if(selectedFrame) {
      selectedFrame.show = show;
    }
    setKeyframes(frames);
  };

  const getImageFrame = (frame: KeyFrame) => (
    <div
      key={frame.id}
      className={styles.keyframe}
      style={{left: `${frame.position}px`}}
      onMouseDown={() => scrub(frame.timestamp)}
      onMouseEnter={() => updateFrameVisibility(frame, true)}
      onMouseLeave={() => updateFrameVisibility(frame, false)}
  >
    <div className={styles.line}></div>
    <div
      className={`${styles.thumbnail} ${frame.show && styles.show}`}
    >
      <img 
        src={frame.image} 
        className={styles.dogpic}
        alt="Frame" 
      />
    </div>
  </div>
  );

  return (
    <div className={styles.Progressbar} data-testid="Progressbar">      
      <div 
        id="track"
        className={styles.track}

      >
        <div className={styles.progressTrack}>
          <div 
            id="progress"
            className={styles.progressBar}
            style={{width: `${progressLength}px`}}
          ></div>
        </div>

        {keyframes.map(frame => getImageFrame(frame))}

      </div>
    </div>
  );
};

export default Progressbar;
