import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Video from './Video';

describe('<Video />', () => {
  test('it should mount', () => {
    render(<Video />);
    
    const video = screen.getByTestId('Video');

    expect(video).toBeInTheDocument();
  });
});