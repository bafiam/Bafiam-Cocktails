import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Test the Navbar', () => {
  test('should have a / url in the href attribute', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(getByTestId('navbar-brand')).toHaveAttribute('href', '/');
  });
});
