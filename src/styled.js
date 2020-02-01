import styled from '@emotion/styled';

// Form styles

const FormGroupStyled = styled.div`
  display: flex;
  flex: 1;
`;

const LegendStyled = styled.legend`
  border-bottom: 1px solid #afb8bc;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  padding: 0;
  color: #afb8bc;
  font-weight: bold;
`;

const FielsetStyled = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 20px;
`;

const InputWithLabelWrapperStyled = styled.div`
  display: inline-block;
  min-width: 50%;
  margin-bottom: 20px;
`;

const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #c3c4c3;
  border-radius: 5px;
  display: flex;
  width: 90%;
  font-size: 1.3em;
`;

const LabelStyled = styled.label`
  color: bold #586d7e;
  font-size: 12px;
  padding: 0;
  height: 20px;
  display: block;
`;

// End Form styles

const HCardPreviewWrapper = styled.div`
  min-height: 700px;
  height: 100vh;
  width: 100%;
  display: inline-block;
  float: left;
  padding: 30px;
`;

const SectionStyled = styled.section`
  float: left;
  width: 50%;
  padding: 30px;
`;

const HCardPreviewSectionStyled = styled.section`
  float: left;
  width: 50%;
  padding: 30px;
  background-color: #e1e4e7;
`;

const ButtonUploadStyled = styled.button`
  background-color: #627a8a;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  margind-right: 2%;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  text-decoration: bold;
  width: 48%;
  box-shadow: 0 2px 2px -1px #333;
`;

const ButtonCreateStyled = styled.button`
  background: #3ea9e2;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 2%;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  text-decoration: bold;
  width: 48%;
  box-shadow: 0 2px 4px -1px #333;
`;

const ImageStyled = styled.img`
  float: right;
  width: 80px;
  margin-right: 3%;
  box-shadow: 0 2px 4px -1px #333;
  margin-top: 15px;
`;

const HCardBoxStyled = styled.div`
  background-color: #fff;
  margin: auto 5%;
  width: 90%;
  box-shadow: 0 2px 4px -1px #333;
`;

const HCardNameAndPhotoWrapperStyled = styled.div`
  background-color: #394f63;
  color: #fff;
  text-align: left;
  height: 100px;
  vertical-align: text-bottom;
  padding-top: 50px;
`;

const HCardEmailLinkStyled = styled.a`
  text-decoration: none;
  color: #000;
`;

const HCardNameAndSurnameStyled = styled.span`
  height: 100px;
  padding-top: 50px;
  padding-left: 20px;
  font-size: 2em;
  display: none;
`;

const HCardFormattedNameStyled = styled.span`
  height: 100px;
  padding-top: 50px;
  padding-left: 20px;
  font-size: 2em;
`;

const H2Styled = styled.h2`
  text-align: right;
  color: #afb8bc;
  margin-bottom: 14px;
  display: block;
  margin-right: 5%;
  font-size: 18px;
`;

const H1Styled = styled.h1`
  font-size: 29px;
  color: #394f63;
  font-weight: bold;
`;

const HCardPreviewRowStyled = styled.div`
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  height: 22px;
  margin-top: 30px;
`;

const HCardFieldStyled = styled.div`
  padding: 0 5% 5% 5%;
`;

const HCardPreviewColStyled = styled.div`
  padding-bottom: 5px;
  height: 15px;
  display: inline-block;
  width: 50%;
`;

const HCardLabelStyled = styled.span`
  display: inline-block;
  min-width: 100px;
  font-size: 0.8em;
`;

export {
  FormGroupStyled,
  InputWithLabelWrapperStyled,
  FielsetStyled,
  InputStyled,
  LabelStyled,
  SectionStyled,
  ButtonUploadStyled,
  ButtonCreateStyled,
  ImageStyled,
  LegendStyled,
  HCardPreviewWrapper,
  HCardBoxStyled,
  HCardNameAndPhotoWrapperStyled,
  HCardNameAndSurnameStyled,
  H2Styled,
  HCardPreviewRowStyled,
  HCardPreviewColStyled,
  HCardLabelStyled,
  HCardPreviewSectionStyled,
  HCardFieldStyled,
  HCardEmailLinkStyled,
  HCardFormattedNameStyled,
  H1Styled,
};
