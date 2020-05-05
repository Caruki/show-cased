import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import InputField from './InputField';
import useDebounce from '../hooks/useDebounce';
import { searchShows } from '../api/shows';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 10px;
  padding: 22px 15px 15px 15px;
  border: 2px solid rgba(150, 31, 86, 0.7);
  border-radius: 11px;
  background-color: rgba(30, 25, 79, 0.8);

  & :focus-within {
    outline-width: 0px;
    padding: 5px;
    margin: 0px 0px 7px 0px;
    background-color: rgba(80, 68, 180, 0.3);
    border: 1px solid rgba(150, 31, 86, 0.8);
    ::placeholder {
      color: transparent;
    }
  }
`;

const Input = styled(InputField)`
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 0px;
  border: 1px solid rgba(147, 49, 102, 0.8);
  border-style: hidden hidden solid hidden;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 1px solid #d0588865;
  background-color: #1e194f;
`;

const ResultItem = styled.div`
  text-align: left;
  font: 300 0.7rem 'Roboto', sans-serif;
  color: #aeb2f5;
`;

function SearchInput() {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      searchShows(debouncedValue)
        .then((results) => {
          setSearchResults(results);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsSearching(false));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [debouncedValue]);

  return (
    <>
      <Container>
        <Input
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search for a tv show..."
        />
      </Container>
      {error && <div>{error}</div>}
      {isSearching && <div>Searching ...</div>}
      {searchResults.length !== 0 && (
        <ResultsContainer>
          {searchResults.map((searchResult) => (
            <ResultItem key={searchResult.id}>
              {searchResult.title} ({searchResult.airYear})
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </>
  );
}

export default SearchInput;
