import React, { Component } from 'react';
import Input from '../components/Input';
import HCardPreview from '../components/HCardPreview';

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

  downloadHCardFile(event) {
    // Preventing default behavior from browser
    event.preventDefault();
    // Creating XMLSerializer
    // This is required because Hcard content needs to be
    // a  valid HTML and XMLSerializer will solve the HTML format
    // When the content is copied.
    const xmlSerializer = new XMLSerializer();
    const hCardPreviewHTML =
      '<html><head></head><body>' +
      xmlSerializer.serializeToString(
        document.getElementById('hcard-preview')
      ) +
      '</body></html>';

    // Please copy this content and add into the
    // hCard validator: http://hcard.geekhood.net

    // Forcing browser to download HTML content from HCardPreview component.
    window.open(
      'data:application/octet-stream;charset=utf-8,' +
        encodeURI(hCardPreviewHTML)
    );
  }

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
          <button name="create" onClick={this.downloadHCardFile}>
            Create hCard
          </button>
        </div>
        <HCardPreview
          givenName={givenName}
          surname={surname}
          email={email}
          phone={phone}
          houseName={houseName}
          street={street}
          suburb={suburb}
          state={state}
          postcode={postcode}
          country={country}
        />
      </div>
    );
  }
}

export default MainPage;
