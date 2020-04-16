import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SearchInput from './SearchInput';
import SubmitButton from './SubmitButton';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: auto;
  margin: 10px 20px;

  & > * {
    flex-basis: 100%;
  }
`;

const IntroductionText = styled.div`
  text-align: center;
  font: 300 0.8rem 'Roboto', sans-serif;
  color: #aeb2f5;
  line-height: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > * {
    margin: 10px;
    width: 80%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function SearchSubmitForm({ textvariation }) {
  return (
    <Container>
      <IntroductionText>
        {`To see recommendations based on your personal viewing profile please
        choose up to four shows you ${textvariation}`}
      </IntroductionText>
      <InputContainer>
        <SearchInput />
        <SearchInput />
        <SearchInput />
      </InputContainer>
      <ButtonContainer>
        <SubmitButton>Submit</SubmitButton>
      </ButtonContainer>
    </Container>
  );
}

SearchSubmitForm.propTypes = {
  textvariation: PropTypes.string,
};

export default SearchSubmitForm;
