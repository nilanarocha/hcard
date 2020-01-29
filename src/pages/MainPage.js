import React, { Component } from 'react';
import Input from '../components/Input';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      houseName: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
    };
  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      givenName,
      surname,
      email,
      phone,
      houseName,
      street,
      suburb,
      state,
      postcode,
      country,
    } = this.state;

    return (
      <div>
        <div>
          <h1>hCard Builder</h1>
          <form>
            <Input name={'givenName'} handleOnChange={this.onInputChange} />
            <Input name={'surname'} handleOnChange={this.onInputChange} />
            <Input name={'email'} handleOnChange={this.onInputChange} />
            <Input name={'phone'} handleOnChange={this.onInputChange} />
            <Input name={'houseName'} handleOnChange={this.onInputChange} />
            <Input name={'street'} handleOnChange={this.onInputChange} />
            <Input name={'suburb'} handleOnChange={this.onInputChange} />
            <Input name={'state'} handleOnChange={this.onInputChange} />
            <Input name={'postcode'} handleOnChange={this.onInputChange} />
            <Input name={'country'} handleOnChange={this.onInputChange} />
          </form>
        </div>
        <div>
          <p>Name:{givenName}</p>
          <p>Surname:{surname}</p>
          <p>Email:{email}</p>
          <p>Phone:{phone}</p>
          <p>House Name:{houseName}</p>
          <p>Street:{street}</p>
          <p>Suburb:{suburb}</p>
          <p>State:{state}</p>
          <p>Postcode:{postcode}</p>
          <p>Country:{country}</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
