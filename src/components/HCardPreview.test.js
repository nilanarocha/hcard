import React from 'react';
import { render } from '@testing-library/react';
import HCardPreview from './HCardPreview';

test('should render all the required fields on HCardPreview', () => {
  const { getByText } = render(<HCardPreview />);

  expect(getByText('EMAIL')).toBeInTheDocument();
  expect(getByText('PHONE')).toBeInTheDocument();
  expect(getByText('ADDRESS')).toBeInTheDocument();
  expect(getByText('POSTCODE')).toBeInTheDocument();
  expect(getByText('COUNTRY')).toBeInTheDocument();
});
