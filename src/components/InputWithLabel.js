import React, { Component } from 'react';
import { LabelStyled, InputStyled } from '../styled';

class InputWithLabel extends Component {
  render() {
    const { handleOnChange, name, label } = this.props;
    return (
      <>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled type="text" name={name} onChange={handleOnChange} />
      </>
    );
  }
}

export default InputWithLabel;
