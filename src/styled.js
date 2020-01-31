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
`;

const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #c3c4c3;
  border-radius: 5px;
  display: flex;
  width: 90%;
`;

const LabelStyled = styled.label`
  color: bold #586d7e;
  font-size: small;
  padding: 0;
  height: 20px;
  display: block;
`;

// End Form styles

const HCardPreviewWrapper = styled.div`
  background-color: #e1e4e7;
  min-height: 700px;
  height: 100vh;
`;

const SectionStyled = styled.section`
  float: left;
  width: 45%;
  padding: 1%;
  margin-left: 40px;
  color: #394f62;
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
  margin-right: 30px;
  box-shadow: 0 2px 4px -1px #333;
  margin-top: 50px;
`;

const HCardBoxStyled = styled.div`
  background-color: #fff;
  margin: auto 5%;
  width: 90%;
  height: 450px;
  box-shadow: 0 2px 4px -1px #333;
`;

const HCardNameAndPhotoWrapperStyled = styled.div`
  background-color: #2c3e50;
  color: #fff;
  height: 130px;
`;

const HCardNameAndSurnameStyled = styled.span`
  height: 100px;
  padding-top: 50px;
  padding-left: 20px;
  font-size: 2em;
`;

const H2Styled = styled.h2`
  text-align: right;
  margin-right: 5%;
  color: #afb8bc;
`;

const HCardPreviewRowStyled = styled.div`
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  margin-left: 5%;
  margin-right: 5%;
  height: 15px;
  margin-top: 30px;
`;

const HCardPreviewColStyled = styled.div`
  padding-bottom: 5px;
  height: 15px;
  display: inline-block;
  width: 50%;
`;

const HCardLabelStyled = styled.label`
  display: inline-block;
  min-width: 120px;
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
};
