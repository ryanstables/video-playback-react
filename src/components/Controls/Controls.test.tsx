import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

describe('<Controls />', () => {
  test('it should mount', () => {
    render(<Controls />);
    
    const controls = screen.getByTestId('Controls');

    expect(controls).toBeInTheDocument();
  });
});