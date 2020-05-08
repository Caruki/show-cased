import styled from '@emotion/styled';

const InputField = styled.input`
  width: 100%;
  margin: 0px 0px 5px 0px;
  border: none;
  background: transparent;
  text-align: center;
  color: #e7eaff;
  font: 100 1rem 'Roboto', sans-serif;
  @media (min-width: 700px) {
    font-size: 1.2rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    font: 100 1rem 'Roboto', sans-serif;
    background-color: transparent !important;
    color: steelblue;
  }

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
