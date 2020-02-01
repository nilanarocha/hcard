import React, { Component } from 'react';
import InputWithLabel from '../components/InputWithLabel';
import HCardPreview from '../components/HCardPreview';

import {
  SectionStyled,
  ButtonUploadStyled,
  ButtonCreateStyled,
  FormGroupStyled,
  LegendStyled,
  FielsetStyled,
  HCardPreviewWrapper,
  HCardPreviewSectionStyled,
  H1Styled,
} from '../styled';

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
        <SectionStyled>
          <H1Styled>hCard Builder</H1Styled>
          <form>
            <FielsetStyled>
              <LegendStyled>PERSONAL DETAILS</LegendStyled>

              <FormGroupStyled>
                <InputWithLabel
                  label={'GIVEN NAME'}
                  name={'givenName'}
                  handleOnChange={this.onInputChange}
                />
                <InputWithLabel
                  label={'SURNAME'}
                  name={'surname'}
                  handleOnChange={this.onInputChange}
                />
              </FormGroupStyled>
              <FormGroupStyled>
                <InputWithLabel
                  label={'EMAIL'}
                  name={'email'}
                  handleOnChange={this.onInputChange}
                />
                <InputWithLabel
                  label={'PHONE'}
                  name={'phone'}
                  handleOnChange={this.onInputChange}
                />
              </FormGroupStyled>
            </FielsetStyled>
            <FielsetStyled>
              <LegendStyled>ADDRESS</LegendStyled>
              <FormGroupStyled>
                <InputWithLabel
                  label={'HOUSE NAME OR #'}
                  name={'houseName'}
                  handleOnChange={this.onInputChange}
                />
                <InputWithLabel
                  label={'STREET'}
                  name={'street'}
                  handleOnChange={this.onInputChange}
                />
              </FormGroupStyled>
              <FormGroupStyled>
                <InputWithLabel
                  label={'SUBURB'}
                  name={'suburb'}
                  handleOnChange={this.onInputChange}
                />
                <InputWithLabel
                  label={'STATE'}
                  name={'state'}
                  handleOnChange={this.onInputChange}
                />
              </FormGroupStyled>
              <FormGroupStyled>
                <InputWithLabel
                  label={'POSTCODE'}
                  name={'postcode'}
                  handleOnChange={this.onInputChange}
                />
                <InputWithLabel
                  label={'COUNTRY'}
                  name={'country'}
                  handleOnChange={this.onInputChange}
                />
              </FormGroupStyled>
            </FielsetStyled>
          </form>

          <ButtonUploadStyled name="upload">Upload Avatar</ButtonUploadStyled>
          <ButtonCreateStyled name="create" onClick={this.downloadHCardFile}>
            Create hCard
          </ButtonCreateStyled>
        </SectionStyled>

        <HCardPreviewSectionStyled>
          <HCardPreviewWrapper>
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
          </HCardPreviewWrapper>
        </HCardPreviewSectionStyled>
      </div>
    );
  }
}

export default MainPage;
