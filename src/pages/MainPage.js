import React, { Component } from 'react';
import Input from '../components/Input';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onInputChange = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <h1>hCard Builder</h1>
          <form>
            <Input handleOnChange={this.onInputChange} />
          </form>
        </div>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default MainPage;
