import React, { createContext } from 'react';
import './App.scss';
import Video from './components/Video/Video';
import Progressbar from './components/Progressbar/Progressbar';
import { VideoPlayer } from './types/interfaces';
import { VideoPlayerObject } from './utils/transport';

export const VideoContext = createContext<VideoPlayer>(new VideoPlayerObject());

function App() {
  return (
    <VideoContext.Provider value={new VideoPlayerObject()}>
    <div className="App">
      <div className="player">
        <Video />
        <Progressbar />
      </div>
      <div className="attribution">
        <a 
          href="https://www.pexels.com/video/a-pomeranian-reaching-for-a-treat-7683638/" 
          target="_blank"
          rel="noreferrer"
        >
          Video by KoolShooters from Pexels
        </a>
      </div>
    </div>
    </VideoContext.Provider>
  );
}

export default App;
