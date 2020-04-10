import styled from '@emotion/styled';

const SubmitButton = styled.button`
  width: 136px;
  height: 46px;
  border-radius: 20px;
  background-image: linear-gradient(#504481, #1e194f);
  color: #d05888;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  outline: none;

  & :hover {
    box-shadow: 1px 1px 6px #d05888;
    text-shadow: 0px 0px 3px #d05888;
  }
`;

export default SubmitButton;
