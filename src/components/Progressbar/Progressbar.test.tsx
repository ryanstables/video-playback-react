import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Progressbar from './Progressbar';

describe('<Progressbar />', () => {
  test('it should mount', () => {
    render(<Progressbar />);
    
    const progressbar = screen.getByTestId('Progressbar');

    expect(progressbar).toBeInTheDocument();
  });
});