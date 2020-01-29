import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { handleOnChange, name } = this.props;
    return <input type="text" name={name} onChange={handleOnChange} />;
  }
}

export default Input;
