import React from 'react';
import { render } from '@testing-library/react';
import HCardBuilder from './HCardBuilder';

test('should render all the required fields on HCardBuilder', () => {
  const { getByText } = render(<HCardBuilder />);

  expect(getByText('GIVEN NAME')).toBeInTheDocument();
  expect(getByText('SURNAME')).toBeInTheDocument();
  expect(getByText('EMAIL')).toBeInTheDocument();
  expect(getByText('PHONE')).toBeInTheDocument();
  expect(getByText('HOUSE NAME OR #')).toBeInTheDocument();
  expect(getByText('STREET')).toBeInTheDocument();
  expect(getByText('SUBURB')).toBeInTheDocument();
  expect(getByText('STATE')).toBeInTheDocument();
  expect(getByText('POSTCODE')).toBeInTheDocument();
  expect(getByText('COUNTRY')).toBeInTheDocument();
});
