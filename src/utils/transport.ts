import { VideoPlayer } from "../types/interfaces";

export class VideoPlayerObject implements VideoPlayer {

  video: HTMLVideoElement | null = null;
  target = new EventTarget();

  constructor(
    private _video?: HTMLVideoElement
  ) {
    if(_video) {
      this.loadVideo(_video);
    }
  }

  loadVideo(_video: HTMLVideoElement | null) {
    this.video = _video;
    if(_video) {
      this.configureListeners(_video);
    }
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

  skipTo(num: number): void {
    if(this.video) {
      this.video.currentTime = num;
    }
  }

  private configureListeners (video: HTMLVideoElement) {
    // the video has loaded...    
    video.addEventListener('canplay', () => this.target.dispatchEvent(new Event('loaded')));
    
    // the playhead is moving...
    video.addEventListener('timeupdate', () => this.target.dispatchEvent(new Event('timeupdate')));
    
    // playback has started...
    video.addEventListener('play', () => this.target.dispatchEvent(new Event('play')));
    video.addEventListener('playing', () => this.target.dispatchEvent(new Event('play')));

    // playback has ended...
    video.addEventListener('ended', () => this.target.dispatchEvent(new Event('pause')));
    video.addEventListener('pause', () => this.target.dispatchEvent(new Event('pause')));
  }
  
}
