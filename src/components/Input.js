import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { handleOnChange } = this.props;
    return <input type="text" onChange={handleOnChange} />;
  }
}

export default Input;
