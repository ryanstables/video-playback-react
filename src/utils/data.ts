import { SeekableItem } from "../types/interfaces";
import dog1 from '../assets/dog1.jpeg';
import dog2 from '../assets/dog2.jpeg';
import dog3 from '../assets/dog3.jpeg';

export const getKeyFrames = (): SeekableItem[] => [
  {
    id: "1",
    image: dog1,
    timestamp: 3,
    show: false
  },
  {
    id: "2",
    image: dog2,
    timestamp: 5,
    show: false
  },
  {
    id: "3",
    image: dog3,
    timestamp: 8.5,
    show: false
  }
];



