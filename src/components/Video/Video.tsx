import React, { FC } from 'react';
import styles from './Video.module.scss';

interface VideoProps {}

const Video: FC<VideoProps> = () => (
  <div className={styles.Video} data-testid="Video">
    Video Component
  </div>
);

export default Video;
