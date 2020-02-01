import React from 'react';
import { render } from '@testing-library/react';
import InputWithLabel from './InputWithLabel';

test('should render an input with label', () => {
  const { getByText } = render(
    <InputWithLabel
      label={'SURNAME'}
      name={'surname'}
      handleOnChange={() => {}}
    />
  );

  expect(getByText('SURNAME')).toBeInTheDocument();
});
