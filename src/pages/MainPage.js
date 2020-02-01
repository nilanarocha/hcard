import React, { Component } from 'react';

import HCardPreview from '../components/HCardPreview';

import {
  SectionStyled,
  ButtonUploadStyled,
  ButtonCreateStyled,
  HCardPreviewWrapper,
  HCardPreviewSectionStyled,
  HiddenInput,
} from '../styled';
import HCardBuilder from '../components/HCardBuilder';

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
      photo: '/default-image.png',
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

  uploadAvatarImage = event => {
    const file = event.target.files[0];
    const isFileAnImage = file && file.type && file.type.includes('image/');
    if (!isFileAnImage) {
      alert('Avatar file should to be an image');
      return;
    }

    // Checking if URL interface exists in browser
    // more details in: https://developer.mozilla.org/en-US/docs/Web/API/URL
    if (window.URL) {
      // Creating an url using the file image content
      // to be added in the <img> src
      this.setState({ photo: window.URL.createObjectURL(file) });
    }
  };

  onUploadClick = event => {
    event.preventDefault();
    // checking if component has a react-reference for input file element
    // and forcing click on hidden input file.
    if (this._inputFileRef) {
      this._inputFileRef.click();
    }
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
      photo,
    } = this.state;

    return (
      <>
        <SectionStyled>
          <HCardBuilder onInputChange={this.onInputChange} />
          <HiddenInput
            type="file"
            onChange={this.uploadAvatarImage}
            style={{ display: 'none' }}
            ref={inputRef => (this._inputFileRef = inputRef)}
          />
          <ButtonUploadStyled name="upload" onClick={this.onUploadClick}>
            Upload Avatar
          </ButtonUploadStyled>
          <ButtonCreateStyled name="create" onClick={this.downloadHCardFile}>
            Create hCard
          </ButtonCreateStyled>
        </SectionStyled>

        <HCardPreviewSectionStyled>
          <HCardPreviewWrapper>
            <HCardPreview
              photo={photo}
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
          </HCardPreviewWrapper>
        </HCardPreviewSectionStyled>
      </>
    );
  }
}

export default MainPage;
