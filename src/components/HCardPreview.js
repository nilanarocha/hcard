import React, { Component } from 'react';
import {
  ImageStyled,
  HCardBoxStyled,
  HCardNameAndPhotoWrapperStyled,
  HCardNameAndSurnameStyled,
  H2Styled,
  HCardPreviewRowStyled,
  HCardPreviewColStyled,
  HCardLabelStyled,
  HCardFieldStyled,
  HCardEmailLinkStyled,
  HCardFormattedNameStyled,
} from '../styled';

class HCardPreview extends Component {
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
    } = this.props;
    return (
      <>
        <H2Styled>HCARD PREVIEW</H2Styled>
        <HCardBoxStyled id="hcard-preview" className="hcard-preview">
          <div className="vcard">
            {photo && <ImageStyled src={photo} alt="hCard owner" />}
            <HCardNameAndPhotoWrapperStyled>
              <HCardNameAndSurnameStyled className="n">
                <span className="given-name">{givenName}</span>
                <span className="family-name">{surname}</span>
              </HCardNameAndSurnameStyled>
              <HCardFormattedNameStyled className="fn">
                {givenName} {surname}
              </HCardFormattedNameStyled>
            </HCardNameAndPhotoWrapperStyled>

            <HCardFieldStyled className="field">
              <HCardPreviewRowStyled className="row">
                <HCardLabelStyled>EMAIL</HCardLabelStyled>
                <HCardEmailLinkStyled
                  className="email"
                  href={`mailto:${email}`}
                >
                  {email}
                </HCardEmailLinkStyled>
              </HCardPreviewRowStyled>
              <HCardPreviewRowStyled className="row">
                <HCardLabelStyled>PHONE</HCardLabelStyled>
                <span className="tel">{phone}</span>
              </HCardPreviewRowStyled>
              <div className="adr">
                <HCardPreviewRowStyled className="row">
                  <HCardLabelStyled>ADDRESS</HCardLabelStyled>

                  <span className="street-address">
                    {houseName} {street}
                  </span>
                </HCardPreviewRowStyled>
                <HCardPreviewRowStyled className="row">
                  <HCardLabelStyled></HCardLabelStyled>
                  <span className="locality">{suburb}</span>

                  {state && <span className="region">, {state}</span>}
                </HCardPreviewRowStyled>
                <HCardPreviewRowStyled className="col row">
                  <HCardPreviewColStyled>
                    <HCardLabelStyled>POSTCODE</HCardLabelStyled>
                    <span className="postal-code">{postcode}</span>
                  </HCardPreviewColStyled>
                  <HCardPreviewColStyled>
                    <HCardLabelStyled>COUNTRY</HCardLabelStyled>
                    <span className="country-name">{country}</span>
                  </HCardPreviewColStyled>
                </HCardPreviewRowStyled>
              </div>
            </HCardFieldStyled>
          </div>
        </HCardBoxStyled>
      </>
    );
  }
}

export default HCardPreview;
