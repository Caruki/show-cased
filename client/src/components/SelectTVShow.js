import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import InputField from './InputField';
import useThrottle from '../hooks/useThrottle';
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
  border: 2px solid #d0588865;
  background-color: #1e194f;
  padding: 10px;
  overflow: auto;
  max-height: 200px;
  margin: -5px 0px 10px 0px;
  width: auto;
`;

const ItemLabel = styled.label`
  cursor: pointer;
  width: 100%;
  :hover {
    background-color: rgb(80, 68, 180, 0.3);
    font-style: bold;
  }
`;

const ResultItem = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid #d0588865;
  border-style: hidden hidden solid hidden;
  font: 300 0.8rem 'Roboto', sans-serif;
  color: #aeb2f5;
  margin: 8px 0px;
  padding: 10px;
`;

const Searching = styled.span`
  display: block;
  color: #aeb2f5;
  font: 300 0.7rem 'Roboto', sans-serif;
  background-color: #1e194f;
  border: 1px solid #d0588865;
`;

const Error = styled.span`
  display: block;
  color: #d05888;
  font: 300 0.7rem 'Roboto', sans-serif;
  background-color: #1e194f;
  border: 1px solid #d0588865;
`;

function SelectTVShow({ onSelect, value }) {
  const [inputValue, setInputValue] = useState('');
  const throttledValue = useThrottle(inputValue, 400);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (throttledValue) {
      setIsSearching(true);
      searchShows(throttledValue)
        .then((results) => {
          setIsSearching(false);
          setSearchResults(results);
        })
        .catch((error) => setError(error.message));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [throttledValue]);

  return (
    <>
      <Container>
        <Input
          autoComplete="off"
          value={inputValue}
          type="search"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder={
            value
              ? `${value.title} (${value.airYear})`
              : 'Search for a tv show...'
          }
          onFocus={() => setShowResults(true)}
        />
      </Container>
      {showResults && isSearching && <Searching>Searching ...</Searching>}
      {showResults && error && <Error>{error.message}</Error>}
      {showResults && searchResults.length !== 0 && (
        <ResultsContainer>
          {searchResults.map((searchResult) => (
            <ItemLabel
              key={searchResult.id}
              onClick={() => {
                setInputValue('');
                onSelect(searchResult);
                setShowResults(false);
              }}
            >
              <ResultItem value={searchResult.id}>
                {searchResult.title} ({searchResult.airYear})
              </ResultItem>
            </ItemLabel>
          ))}
        </ResultsContainer>
      )}
    </>
  );
}

SelectTVShow.propTypes = {
  value: PropTypes.object,
  onSelect: PropTypes.func,
};

export default SelectTVShow;
