import styled from '@emotion/styled';

// Form styles

const FormGroupStyled = styled.div`
  display: flex;
  flex: 1;
`;

const LegendStyled = styled.legend`
  border-bottom: 1px solid #333;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const FielsetStyled = styled.fieldset`
  border: none;
  margin-bottom: 20px;
`;

const InputWithLabelWrapperStyled = styled.div`
  display: inline-block;
  min-width: 50%;
`;

const InputStyled = styled.input`
  padding: 10px;
  border: 2px solid #dadbda;
  border-radius: 5px;
  display: flex;
  width: 90%;
`;

const LabelStyled = styled.label`
  padding: 10px;
  color: bold #586d7e;
  font-size: small:
`;

// End Form styles

const SectionStyled = styled.section`
  float: left;
  width: 40%;
  padding: 1%;
  margin-left: 40px;
  color: #394f62;
`;

const ButtonUploadStyled = styled.button`
  background-color: #c9cfd2;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  margind-right: 20px;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  text-decoration: bold:
  width: 100%;
  box-shadow: 0 2px 2px -1px grey;
`;

const ButtonCreateStyled = styled.button`
  background: #3ea9e2;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  text-decoration: bold:
  width: 100%;
  box-shadow: 0 2px 4px -1px grey;
`;

const ImageStyled = styled.image`
  float: right;
  width: 20px;
  margin-right: 30px;
  box-shadow: 0 2px 4px -1px grey;
  margin-top: 50px;
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
};
