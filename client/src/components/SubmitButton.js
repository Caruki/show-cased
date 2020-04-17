import styled from '@emotion/styled';

const SubmitButton = styled.button`
  border: hidden;
  border-radius: 20px;
  background-color: transparent;
  background-image: linear-gradient(#504481, #1e194f);
  color: #d05888;
  margin: 10px;
  padding: 13px 45px;
  font: 300 1rem 'Roboto', sans-serif;
  cursor: pointer;

  &:focus {
    outline-width: 0;
    color: rgba(174, 178, 245, 1);
    box-shadow: 0px 0px 5px rgba(174, 178, 245, 0.5);
    border: 1.5px solid rgba(174, 178, 245, 0.5);
  }
`;

export default SubmitButton;
