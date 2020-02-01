import React, { Component } from 'react';
import InputWithLabel from '../components/InputWithLabel';

import {
  FormGroupStyled,
  LegendStyled,
  FielsetStyled,
  H1Styled,
} from '../styled';

class HCardBuilder extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <>
        <H1Styled>hCard Builder</H1Styled>
        <form>
          <FielsetStyled>
            <LegendStyled>PERSONAL DETAILS</LegendStyled>

            <FormGroupStyled>
              <InputWithLabel
                label={'GIVEN NAME'}
                name={'givenName'}
                handleOnChange={onInputChange}
              />
              <InputWithLabel
                label={'SURNAME'}
                name={'surname'}
                handleOnChange={onInputChange}
              />
            </FormGroupStyled>
            <FormGroupStyled>
              <InputWithLabel
                label={'EMAIL'}
                name={'email'}
                handleOnChange={onInputChange}
              />
              <InputWithLabel
                label={'PHONE'}
                name={'phone'}
                handleOnChange={onInputChange}
              />
            </FormGroupStyled>
          </FielsetStyled>
          <FielsetStyled>
            <LegendStyled>ADDRESS</LegendStyled>
            <FormGroupStyled>
              <InputWithLabel
                label={'HOUSE NAME OR #'}
                name={'houseName'}
                handleOnChange={onInputChange}
              />
              <InputWithLabel
                label={'STREET'}
                name={'street'}
                handleOnChange={onInputChange}
              />
            </FormGroupStyled>
            <FormGroupStyled>
              <InputWithLabel
                label={'SUBURB'}
                name={'suburb'}
                handleOnChange={onInputChange}
              />
              <InputWithLabel
                label={'STATE'}
                name={'state'}
                handleOnChange={onInputChange}
              />
            </FormGroupStyled>
            <FormGroupStyled>
              <InputWithLabel
                label={'POSTCODE'}
                name={'postcode'}
                handleOnChange={onInputChange}
              />
              <InputWithLabel
                label={'COUNTRY'}
                name={'country'}
                handleOnChange={onInputChange}
              />
            </FormGroupStyled>
          </FielsetStyled>
        </form>
      </>
    );
  }
}

export default HCardBuilder;
