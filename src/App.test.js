import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render hCard Builder h1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('hCard Builder');
  expect(linkElement).toBeInTheDocument();
});

test('should render HCARD PREVIEW h2', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('HCARD PREVIEW');
  expect(linkElement).toBeInTheDocument();
});
