import React, { Component } from 'react';

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
    } = this.props;
    return (
      <div id="hcard-preview" className="hcard-preview">
        <div className="vcard">
          <div className="fn">
            {givenName} {surname}
          </div>
          <img src="/default-image.png" alt="hCard owner" />
          <span className="n">
            {givenName} {surname}
          </span>
          <span className="given-name">{givenName}</span>
          <span className="family-name">{surname}</span>
          <div className="field">
            <div className="row">
              <span className="label">EMAIL</span>
              <a className="email" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className="row">
              <span className="label">PHONE</span>
              <span className="tel">{phone}</span>
            </div>
            <div className="adr">
              <div className="row">
                <span className="label">ADDRESS</span>
                <span className="street-address">
                  {houseName} {street}
                </span>
              </div>
              <div className="row">
                <span className="label"></span>
                <span className="locality">{suburb}, </span>

                <span className="region">{state}</span>
              </div>
              <div className="col row">
                <span className="label">POSTCODE</span>
                <span className="postal-code">{postcode}</span>
              </div>
              <div className="col row">
                <span className="label">COUNTRY</span>
                <span className="country-name">{country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HCardPreview;
