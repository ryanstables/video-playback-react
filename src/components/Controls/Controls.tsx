import React, { FC, useContext, useState } from 'react';
import styles from './Controls.module.scss';
import rewind from '../../assets/rewind.svg';
import forward from '../../assets/forward.svg';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import { VideoContext } from '../../App';

interface ControlsProps {
  show: boolean
}

const Controls: FC<ControlsProps> = ({show}) => {

  const [paused, setPaused] = useState<boolean>(true);
  const videoPlayer = useContext(VideoContext);
  
  videoPlayer.target.addEventListener('play', () => setPaused(false));
  videoPlayer.target.addEventListener('pause', () => setPaused(true));

  const togglePlay = (): void => {
    if(paused) {      
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  };

  return (
    <div 
      className={`${styles.Controls} ${show && styles.show}`} data-testid="Controls">      
      <div className={styles.controlBox} id="control-panel">
        <button 
            onClick={() => videoPlayer.skip(-1)}>
            <img src={rewind} alt="Skip backwards 1s" />
            <p>1 second</p>
        </button>

        <button onClick={() => togglePlay()} >
          {paused ? 
            <img src={play} alt="Play" id="play" /> : 
            <img src={pause} alt="Pause" id="pause" />
          }
        </button>

        <button onClick={() => videoPlayer.skip(1)}>
          <img src={forward} alt="Skip forwards 1s" />
          <p>1 second</p>
        </button>
      </div>
    </div>
  )
};

export default Controls;
