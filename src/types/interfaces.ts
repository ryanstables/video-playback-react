export interface SeekableItem {
  id: string;
  image: string;
  timestamp: number;
  show: boolean;
}

export interface KeyFrame extends SeekableItem{
  position: number;
}

export interface VideoPlayer {
  duration: number;
  video: HTMLVideoElement | null;
  target: EventTarget;
  loadVideo(video: HTMLVideoElement | null): void;
  play(): void;
  pause(): void;
  skip(amount: number): void;
  skipTo(time: number): void;
}