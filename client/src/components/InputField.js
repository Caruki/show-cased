import styled from '@emotion/styled';

const InputField = styled.input`
  height: 25px;
  margin: 0;
  border: none;
  background: transparent;
  text-align: center;
  color: #e7eaff;
  font: 100 1.2rem 'Roboto', sans-serif;

  & :focus {
    outline-width: 0;
    ::placeholder {
      color: transparent;
    }
  }

  ::placeholder {
    color: #aeb2f5;
  }
`;

export default InputField;
