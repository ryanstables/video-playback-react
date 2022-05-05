import React from 'react';
import './App.scss';
import Video from './components/Video/Video';
import Progressbar from './components/Progressbar/Progressbar';

function App() {
  return (
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
  );
}

export default App;
