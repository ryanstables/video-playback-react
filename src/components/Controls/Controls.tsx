import React, { FC } from 'react';
import styles from './Controls.module.scss';

interface ControlsProps {}

const Controls: FC<ControlsProps> = () => (
  <div className={styles.Controls} data-testid="Controls">
    Controls Component
  </div>
);

export default Controls;
