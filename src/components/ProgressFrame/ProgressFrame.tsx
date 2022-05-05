import React, { FC, useContext } from 'react';
import { VideoContext } from '../../App';
import { KeyFrame } from '../../types/interfaces';
import styles from './ProgressFrame.module.scss';

interface ProgressFrameProps {
  frame: KeyFrame,
  setVisibility: (frame: KeyFrame, state: boolean) => void;
}

const ProgressFrame: FC<ProgressFrameProps> = ({frame, setVisibility}) => {  
  
  const videoPlayer = useContext(VideoContext);
  
  return (
    <div
      key={frame.id}
      className={styles.keyframe}
      style={{left: `${frame.position}%`}}
      onMouseDown={() => videoPlayer.skipTo(frame.timestamp)}
      onMouseEnter={() => setVisibility(frame, true)}
      onMouseLeave={() => setVisibility(frame, false)}
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
  )};

export default ProgressFrame;
