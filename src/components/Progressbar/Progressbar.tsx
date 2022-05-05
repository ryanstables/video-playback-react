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
  
  const timeToProgress = (time: number): number => {
    const dur = videoPlayer.video?.duration ? videoPlayer.video.duration : 0;
    return Math.max(0, Math.min(time / dur, 100));
  }

  const mapToTrack = (x: number): number => {
    if(progressBarRef.current) {
      return x * progressBarRef.current.clientWidth;
    } else {
      return 0;
    }
  }

  videoPlayer.target.addEventListener('timeupdate', () => {
    if(progressBarRef && videoPlayer.video) {
      const prog = timeToProgress(videoPlayer.video.currentTime);
      setProgressLength(mapToTrack(prog));
    }
  });

  videoPlayer.target.addEventListener('loaded', () => {
    const frames: KeyFrame[] = getKeyFrames().map(frame => {
      return {
        ...frame, 
        position: mapToTrack(timeToProgress(frame.timestamp))
      };
    });
    setKeyframes(frames);
  });

  const scrub = (timestamp: number) => {
    videoPlayer.skipTo(timestamp);
  };

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
            style={{width: `${progressLength}px`}}
          ></div>
        </div>

        {keyframes.map(frame => getImageFrame(frame))}

      </div>
    </div>
  );
};

export default Progressbar;
