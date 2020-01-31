import React, { Component } from 'react';
import {
  LabelStyled,
  InputStyled,
  InputWithLabelWrapperStyled,
} from '../styled';

class InputWithLabel extends Component {
  render() {
    const { handleOnChange, name, label } = this.props;
    return (
      <InputWithLabelWrapperStyled>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled type="text" name={name} onChange={handleOnChange} />
      </InputWithLabelWrapperStyled>
    );
  }
}

export default InputWithLabel;
