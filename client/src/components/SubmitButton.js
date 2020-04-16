import styled from '@emotion/styled';

const SubmitButton = styled.button`
  border: hidden;
  border-radius: 20px;
  background-image: linear-gradient(#504481, #1e194f);
  color: #d05888;
  padding: 13px 45px;
  font: 300 1rem 'Roboto', sans-serif;

  & :focus {
    outline-width: 0;
  }

  & :hover {
    box-shadow: 1px 1px 6px #d05888;
    text-shadow: 0px 0px 3px #d05888;
  }
`;

export default SubmitButton;
