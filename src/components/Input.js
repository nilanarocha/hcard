import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { handleOnChange, name, label } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type="text" name={name} onChange={handleOnChange} />
      </div>
    );
  }
}

export default Input;
