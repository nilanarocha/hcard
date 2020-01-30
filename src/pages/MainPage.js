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
            <fieldset>
              <legend>PERSONAL DETAILS</legend>

              <Input
                label={'GIVEN NAME'}
                name={'givenName'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'SURNAME'}
                name={'surname'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'EMAIL'}
                name={'email'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'PHONE'}
                name={'phone'}
                handleOnChange={this.onInputChange}
              />
            </fieldset>
            <fieldset>
              <legend>ADDRESS</legend>

              <Input
                label={'HOUSE NAME OR #'}
                name={'houseName'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'STREET'}
                name={'street'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'SUBURB'}
                name={'suburb'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'STATE'}
                name={'state'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'POSTCODE'}
                name={'postcode'}
                handleOnChange={this.onInputChange}
              />
              <Input
                label={'COUNTRY'}
                name={'country'}
                handleOnChange={this.onInputChange}
              />
            </fieldset>
          </form>
          <button name="upload">Upload Avatar</button>
          <button name="create">Create hCard</button>
        </div>
        <div>
          <p>
            {givenName} {surname}
          </p>

          <p>EMAIL {email}</p>
          <p>PHONE {phone}</p>
          <p>
            ADDRESS {houseName} {street}
          </p>
          <p>
            {suburb}, {state}
          </p>

          <p>
            POSTCODE {postcode} COUNTRY {country}
          </p>
        </div>
      </div>
    );
  }
}

export default MainPage;
