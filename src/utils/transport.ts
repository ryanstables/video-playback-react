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
    // This provides a persistent EventTarget for listener to bind to when the underlying video can be NULL.
    video.addEventListener('loadedmetadata', () => this.target.dispatchEvent(new Event('loaded')));
    video.addEventListener('timeupdate', () => this.target.dispatchEvent(new Event('timeupdate')));
    video.addEventListener('play', () => this.target.dispatchEvent(new Event('play')));
    video.addEventListener('ended', () => this.target.dispatchEvent(new Event('pause')));
    video.addEventListener('pause', () => this.target.dispatchEvent(new Event('pause')));
  }
  
}
