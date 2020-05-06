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
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [state, setState] = useState({});
  const [focused, setFocused] = useState('');

  const debouncedValue = useDebounce(state[focused], 400);

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

  async function handleSelect(searchResult, name) {
    setState({
      ...state,
      [name]: searchResult.title,
    });
    setSearchResults([]);
    setIsSelected(true);
  }

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
    setFocused(event.target.name);
    console.log(focused);
  }

  const searchInputs = ['show1', 'show2', 'show3', 'show4'];

  return (
    <Container>
      <IntroductionText>
        {`To see recommendations based on your personal viewing profile please
        choose up to four shows you ${textvariation}`}
      </IntroductionText>
      <InputContainer>
        {searchInputs.map((searchInput) => (
          <SearchInput
            key={searchInput}
            focused={focused}
            name={searchInput}
            searchResults={searchResults}
            error={error}
            isSearching={isSearching}
            onSelect={handleSelect}
            onChange={handleChange}
            isSelected={isSelected}
          />
        ))}
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
