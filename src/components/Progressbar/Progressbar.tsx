import React, { FC } from 'react';
import styles from './Progressbar.module.scss';

interface ProgressbarProps {}

const Progressbar: FC<ProgressbarProps> = () => (
  <div className={styles.Progressbar} data-testid="Progressbar">
    Progressbar Component
  </div>
);

export default Progressbar;
