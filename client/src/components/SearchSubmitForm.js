import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SearchInput from './SearchInput';
import SubmitButton from './SubmitButton';
import useDebounce from '../hooks/useDebounce';
import { searchShows } from '../api/shows';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: auto;
  height: 60%;
  margin: 50px 10px;

  & > * {
    flex-basis: 100%;
    margin: 10px 10px;
  }
`;

const IntroductionText = styled.div`
  text-align: center;
  font: 300 0.9rem 'Roboto', sans-serif;
  color: #aeb2f5;
  line-height: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > * {
    margin: 10px;
    width: 90%;
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
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      searchShows(debouncedValue)
        .then((results) => {
          setIsSearching(false);
          setSearchResults(results);
        })
        .catch((error) => setError(error.message));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [debouncedValue]);

  async function handleSelect(searchResult) {
    setValue(searchResult.title);
    setSearchResults([]);
    setIsSelected(true);
  }

  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
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
          searchResults={searchResults}
          error={error}
          isSearching={isSearching}
          onSelect={handleSelect}
          onChange={handleChange}
          isSelected={isSelected}
        />
        {/* <SearchInput />
        <SearchInput />
        <SearchInput /> */}
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
