export interface SeekableItem {
  id: string;
  image: string;
  timestamp: number;
  show: boolean;
}

export interface KeyFrame extends SeekableItem{
  position: number;
}
