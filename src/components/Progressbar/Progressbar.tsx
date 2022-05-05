import React, { FC, useContext, useRef } from 'react';
import { VideoContext } from '../../App';
import { KeyFrame } from '../../types/interfaces';
import { getKeyFrames } from '../../utils/data';
import styles from './Progressbar.module.scss';

interface ProgressbarProps {}

const Progressbar: FC<ProgressbarProps> = () => {

  const [progressLength, setProgressLength] = React.useState<number>(0);
  const [keyframes, setKeyframes] = React.useState<KeyFrame[]>([]);
  const videoPlayer = useContext(VideoContext);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  
  const mapTimeToWidth = (time: number): number => {
    const dur = videoPlayer.video?.duration ? videoPlayer.video.duration : 0;
    return Math.max(0, Math.min(time / dur, 1)) * 100;
  }

  videoPlayer.target.addEventListener('timeupdate', () => {
    if(progressBarRef && videoPlayer.video) {
      setProgressLength(mapTimeToWidth(videoPlayer.video.currentTime));
    }
  });

  videoPlayer.target.addEventListener('loaded', () => {
    const frames: KeyFrame[] = getKeyFrames().map(frame => {
      return {
        ...frame, 
        position: mapTimeToWidth(frame.timestamp)
      };
    });
    setKeyframes(frames);  
  });

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
      style={{left: `${frame.position}%`}}
      onMouseDown={() => videoPlayer.skipTo(frame.timestamp)}
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
    <div 
      className={styles.Progressbar} 
      data-testid="Progressbar"
      ref={progressBarRef}
    >
      <div 
        id="track"
        className={styles.track}
      >
        <div className={styles.progressTrack}>
          <div 
            id="progress"
            className={styles.progressBar}
            style={{width: `${progressLength}%`}}
          ></div>
        </div>

        {keyframes.map(frame => getImageFrame(frame))}

      </div>
    </div>
  );
};

export default Progressbar;
