import { VideoPlayer } from "../types/interfaces";

export class VideoPlayerObject implements VideoPlayer {
  
  duration!: number;
  video: HTMLVideoElement | null = null;

  constructor(
    private _video?: HTMLVideoElement
  ) {
    if(_video) {
      this.loadVideo(_video);
    }
  }

  loadVideo(_video: HTMLVideoElement | null) {
    this.video = _video;
  }

  play(): void {
    if(this.video) {
      this.video.play();
    }
  }

  pause(): void {
    if(this.video) {
      this.video.pause();
    }    
  }

  skip(num: number): void {
    if(this.video) {
      this.video.currentTime += num;
    }    
  }

}
