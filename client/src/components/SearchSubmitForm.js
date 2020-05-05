import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SearchInput from './SearchInput';
import SubmitButton from './SubmitButton';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: auto;
  height: 60%;
  margin: 50px 20px;

  & > * {
    flex-basis: 100%;
    margin: 0px 20px;
  }
`;

const IntroductionText = styled.div`
  text-align: center;
  font: 300 0.9rem 'Roboto', sans-serif;
  color: #aeb2f5;
  line-height: 17px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > * {
    margin: 10px;
    width: 80%;
    border: 1px solid rgba(150, 31, 86, 0.8);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    height: fit-content;
  }
`;

function SearchSubmitForm({ textvariation }) {
  const [value, setValue] = useState('');
  /*  const [searchResults, setSearchResults] = useState([]); */

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Container>
      <IntroductionText>
        {`To see recommendations based on your personal viewing profile please
        choose up to four shows you ${textvariation}`}
      </IntroductionText>
      <InputContainer>
        <SearchInput
          value={value}
          onChange={handleChange}
          /* searchResults={searchResults} */
        />
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
